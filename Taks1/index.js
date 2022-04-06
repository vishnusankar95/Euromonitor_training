
function toggleacc(id){
    // console.log("its working")
    var selectType = document.getElementById(id);
    if(selectType.style.display == 'none')
    selectType.style.display = 'block'
    else
    selectType.style.display = 'none'
}

function toggle_Account_Type(){
    let selectData = document.getElementById("custmmerData");
    let acc_type = document.getElementById("account_Type").value;
    console.log("styes : ",selectData.style.display)
    console.log("Selected item is :", acc_type)

    selectData.style.display = 'block'
}


function valiteForm(){
  let name = document.getElementById("name").value;  
  let age = document.getElementById("age").value;
  let location = document.getElementById("location").value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;
  let email = document.getElementById("email").value;
  let acc_type = document.getElementById("account_Type").value;

  if(age>68){
    alert("You are not eligible for account opening");
  }
  

  let userdata = {acc_type,name,age,location,state,country,email}

  let cusomer_Data = localStorage.setItem("userdata",JSON.stringify(userdata));
  
  window.location.href="./accountdata.html";
}