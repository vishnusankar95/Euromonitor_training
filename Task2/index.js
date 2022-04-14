// api url
const api_url = "https://reqres.in/api/users";

// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data)
}
// Calling that async function
getapi(api_url);


// Function to define innerHTML for HTML table
var html="";
function show(data) {
  const user = data.data.map(user =>{
      return `<div class="userData">
              <h4>${user.first_name}</h4>
              <h5>${user.email}</h5>
              <div onclick="createuser(${user.id})">
              <img src=${user.avatar} alt="User Image"/>
              </div>          
              </div>`
  })
  html += user;
  document.getElementById("disp_data").innerHTML=html;
}

async function createuser(id) {
  const response = await fetch(api_url);
    
  // Storing data in form of JSON
  var data = await response.json();
  let user_deatils = {};
   for(let user of data.data){
     if(id== user.id){
       let u_id = id;
       let f_name = user.first_name;
       let l_name = user.last_name;
       let email = user.email;
       let avatar = user.avatar;
       user_deatils = {
        u_id,
        f_name,
        l_name,
        email,
        avatar
       }
       
     }
   }
   
 localStorage.setItem("user_deatils",JSON.stringify(user_deatils));
  window.location.href="./user.html";
}

