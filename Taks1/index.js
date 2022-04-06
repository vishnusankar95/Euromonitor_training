
function toggleacc(id){
    // console.log("its working")
    var selectType = document.getElementById(id);
    if(selectType.style.display == 'none')
    selectType.style.display = 'block'
    else
    selectType.style.display = 'none'
}

function toggleData(id){
    var selectData = document.getElementById(id);
    if(selectData.style.display == 'none')
    selectData.style.display = 'block'
    else
    selectData.style.display = 'none'
}

function valiteForm(){
  let name = document.getElementById("name").value;  
  let age = document.getElementById("age").value;
  let location = document.getElementById("location").value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;
  let email = document.getElementById("email").value;

  if(age>68){
    alert("You are not eligible for account opening");
  }

  
}