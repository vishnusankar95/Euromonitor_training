
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
    let dep_sav = document.getElementById("dep_sav")
    let dep_cur = document.getElementById("dep_cur")
    // console.log("styes : ",selectData.style.display)
    // console.log("Selected item is :", acc_type)
    if(acc_type== "savings" ){
    selectData.style.display = 'block';
    dep_sav.style.display = 'block'
    dep_cur.style.display = 'none';
    }
    else if ( acc_type == "current"){
      selectData.style.display = 'block';
      dep_cur.style.display = 'block';
      dep_sav.style.display = 'none'
    }
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

  let acc_num = ""
  let yb ;
  let submitOk = true;
  let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  

  //validators

  if(name.length <1 || location.length <1 || state.length <1 || country.length <1){
    submitOk = false;
  }
  

  if(!ValidateEmail(email)){
    submitOk = false;
  }

  //age Calculator
  let td =  new Date( );
  year = td.getFullYear();
  month = td.getMonth();
  day = td.getDate();
  // console.log("Year : ",year)
  // console.log("month : ",month+1)
  // console.log("day : ",day)
  
  let d = new Date( age );
  if(td>d){
 
if ( !!d.valueOf() ) { // Valid date
    year = d.getFullYear();
    month = d.getMonth();
    day = d.getDate();
   
     yb = td.getFullYear() - d.getFullYear();
    if(yb<0){
      alert("Invalid date of birth")
    }
    else{
      let mb = td.getMonth() - d.getMonth();
      if(mb < 0){
        yb -=1;
      }
      else if(mb == 0){
        console.log("month of birth :",mb)
       let db = td.getDate() - d.getDate();
       if(db > 0){
        yb -=1;
      }
      }    
      // console.log(" date of birth :",db)    
      if(yb>68){
        alert("You are not eligible for account opening");
        submitOk = false;
      }
    }
    // console.log("Year : ",year)
    // console.log("month : ",month+1)
    // console.log("day : ",day)
} else { 
  /* Invalid date */
  alert("Invalid date of birth")
  submitOk = false;
 }

console.log("age :", yb)
  }
  else{
    alert("Invalid date of birth")
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

    if(acc_type == "savings"){
      let deposit = document.getElementById("saving_dep").value; 
      if(deposit<500){
        alert("Minimum 500 required to open Savings account")
        submitOk = false;
      }
     

      let userdata = {acc_type,name,age,location,state,country,email,acc_num,yb,deposit}

      let cusomer_Data = localStorage.setItem("userdata",JSON.stringify(userdata));
  
      pageshifter()
      return true
    }
    else if(acc_type == "current"){
      let deposit = document.getElementById("current_dep").value;
      if(deposit<800){
        alert("Minimum 800 required to open Current account")
        submitOk = false;
      }
      

      let userdata = {acc_type,name,age,location,state,country,email,acc_num,yb,deposit}

      let cusomer_Data = localStorage.setItem("userdata",JSON.stringify(userdata));
  
      pageshifter()
      return true
    }
    else{
      alert("Something went wrong, Please try again")
      return false
    }


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

//trial 

