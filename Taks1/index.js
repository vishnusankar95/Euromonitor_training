
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
    if(acc_type== "savings" || acc_type == "current")
    selectData.style.display = 'block';
    else
    selectData.style.display = 'none';
}


function valiteForm(){
  let name = document.getElementById("name").value;  
  let age = document.getElementById("age").value;
  let location = document.getElementById("location").value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;
  let email = document.getElementById("email").value;
  let acc_type = document.getElementById("account_Type").value;
  let acc_nm = ( Math.random().toString().substring(2, 14));
  let acc_num = "";
  let submitOk = true;
  let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  //validators

  if(name.length <1 || location.length <1 || state.length <1 || country.length <1){
    submitOk = false;
  }
  
  if(age>68){
    alert("You are not eligible for account opening");
    submitOk = false;
  }

  if(!ValidateEmail(email)){
    submitOk = false;
  }

  //Account number Creator

  if(acc_type == "savings"){
    acc_num = "Sav"+acc_nm.toString();
  }
  else if(acc_type == "current"){
    acc_num = "Curr"+acc_nm.toString();
  }

  //form handle 

  if(submitOk==false){
    alert("Please fill with valid details.");
    return false;
  }
  else{

    let userdata = {acc_type,name,age,location,state,country,email,acc_num}

    let cusomer_Data = localStorage.setItem("userdata",JSON.stringify(userdata));

    pageshifter()
    return true
  }
  
}

function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(custmmer_Data.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}


function pageshifter(){
  console.log(1234)
window.location.href="./accountdata.html";
}