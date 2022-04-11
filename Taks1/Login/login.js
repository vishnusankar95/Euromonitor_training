let data = JSON.parse(localStorage.getItem("userdata"));

let personal_data;
function check(){

let login_acc = document.getElementById("input_acc").value ;
//console.log(login_acc)
for(let user of data){
    if(login_acc == user.acc_num){

       let name = user.name;
       let accNum = user.acc_num;
       let age = user.yb;
       let dob = user.age;
       let aclocation = user.location;
       let state = user.state;
       let country = user.country;
       let email = user.email;
       let savings_depo = user.deposit;
       let account_type = user.acc_type;

       let login_data = {name,accNum,age,dob,aclocation,state,country,email,savings_depo,account_type}
       personal_data = login_data;
       display(login_data)
    }

}

}

function display(data){
   console.log("details ", data)
let name = data.name;
let accNum = data.accNum;
let age = data.age;
let dob = data.dob;
let aclocation = data.aclocation;
let state = data.state;
let country = data.country;
let email = data.email;
let savings_depo = data.savings_depo;
let account_type = data.account_type; 

let d = new Date( dob )
year = d.getFullYear();
month = d.getMonth();
day = d.getDate();

//console.log("name is :", name)
document.getElementById("acc_name").innerHTML = name;
document.getElementById("acc_num").innerHTML = accNum;
document.getElementById("acc_age").innerHTML = age;
document.getElementById("acc_dob").innerHTML = day+"-"+month+"-"+year;
document.getElementById("acc_location").innerHTML = aclocation;
document.getElementById("acc_state").innerHTML = state;
document.getElementById("acc_country").innerHTML = country;
document.getElementById("acc_email").innerHTML = email;
document.getElementById("acc_bal_sav").innerHTML = savings_depo;

var selectType = document.getElementById("display");
if(selectType.style.display == 'none'){
selectType.style.display = 'block';
document.getElementById('login').style.display = 'none'
}
else
selectType.style.display = 'none'
}

function redirect_money(){
let trans = document.getElementById("transaction");
if(trans.style.display == 'none'){
trans.style.display = 'block';
}
else
trans.style.display = 'none'

}

function withdrow(){
    var selectType = document.getElementById("withdrow_div");
    if(selectType.style.display == 'none')
    selectType.style.display = 'block'
    else
    selectType.style.display = 'none'
   }

   function deposite(){
    var selectType = document.getElementById("deposite_div");
    if(selectType.style.display == 'none')
    selectType.style.display = 'block'
    else
    selectType.style.display = 'none'
   }

   function check_withdrow(){
    let val = document.getElementById("withdraw_val").value;
    let account_type = personal_data.account_type;
    //console.log("val ", val)
    if(val == ""){
        alert("Type the amount to withdrow")
    }
    else{
       
     if( account_type == "savings"){
         //console.log(123)
        let new_bal = checkout_sav_withdrawel(val)
        var new_data = document.getElementById("new_data");
        document.getElementById("account_name").innerHTML = personal_data.name;    
        document.getElementById("account_num").innerHTML = personal_data.accNum;
        document.getElementById("account_email").innerHTML = personal_data.email;
        personal_data.savings_depo = new_bal;
        document.getElementById("acc_bal_sav").innerHTML = new_bal;

        new_data.style.display = 'block'
     }
     else if(account_type == "current"){

         let new_bal = checkout_cur_withdrawel(val)
         //console.log(new_bal)
        var new_data = document.getElementById("new_data");
        document.getElementById("account_name").innerHTML = personal_data.name;    
        document.getElementById("account_num").innerHTML =  personal_data.accNum;
        document.getElementById("account_email").innerHTML = personal_data.email;
        personal_data.savings_depo = new_bal;
        document.getElementById("acc_bal_sav").innerHTML = new_bal;
        new_data.style.display = 'block'

     }
    }

   
}


function check_deposite(){
    let val = document.getElementById("deposite_val").value;
    //console.log("val ", val)
    if(val == ""){
        alert("Type the amount to Deposite")
    }
    else{
     if( account_type == "savings"){
        
        let new_bal = Number(personal_data.savings_depo) +Number(val);
        console.log("new ", new_bal)
        var new_data = document.getElementById("new_data");
        document.getElementById("acc_name").innerHTML = name;    
        document.getElementById("acc_num").innerHTML = accNum;
        document.getElementById("acc_email").innerHTML = email;
        document.getElementById("acc_bal_sav").innerHTML = new_bal;
        

        new_data.style.display = 'block'
     }
     else if(account_type == "current"){

         let new_bal = Number(personal_data.savings_depo) +Number(val);
        var new_data = document.getElementById("new_data");
        console.log(name)
        document.getElementById("acc_name").innerHTML = name;    
        document.getElementById("acc_num").innerHTML = accNum;
        document.getElementById("acc_email").innerHTML = email;
        document.getElementById("acc_bal_sav").innerHTML = new_bal;
        new_data.style.display = 'block'
     }
    }

   
}


function  checkout_sav_withdrawel(val){
    if(val > personal_data.savings_depo){
        alert("you cannot withdraw the amount due to insufficient balance")
    }else{
        let new_bal = personal_data.savings_depo - val;
        return new_bal;       
    }
}

function  checkout_cur_withdrawel(val){
    if(val > personal_data.savings_depo){
        alert("that Balance is less and u need to use OverDraft")
    }else{
        let new_bal = personal_data.savings_depo - val;
       
        return new_bal;       
    }
}



function redirect_home(){
   window.location.href="../Home/Home.html"
}