// function formValidation()
// {
//     var uname = document.registration.username;
//     var passid = document.registration.passid;
//     var uemail = document.registration.email;
//     var uphone = document.registration.phone;
//     if(allLetter(uname))
//     {
//     if(passid_validation(passid,7,12))
//     {
//     if(ValidateEmail(uemail))
//     {
//     if(phoneNumber(uphone,10))
//     {

//     }  
//     }  
//     }  
//     }
//     return false;
// }



// function allLetter(uname)
// { 
// var letters = /^[A-Za-z]+$/;
// if(uname.value.match(letters))
// {
// return true;
// }
// else
// {
// alert('Username must have alphabet characters only');
// uname.focus();
// return false;
// }
// }


// function passid_validation(passid,mx,my)
// {
// var passid_len = passid.value.length;
// if (passid_len == 0 ||passid_len >= my || passid_len < mx)
// {
// alert("Password should not be empty / length be between "+mx+" to "+my);
// passid.focus();
// return false;
// }
// return true;
// }

// function ValidateEmail(uemail)
// {
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(uemail.value.match(mailformat))
// {
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// uemail.focus();
// return false;
// }
// }

// function phoneNumber(uphone)
// {
//   var phoneno = /^\d{10}$/;
//   if(uphone.value.match(phoneno))
//         {
//       return true;
//         }
//       else
//         {
//         alert("Not a valid Phone Number");
        
//         uphone.focus();
//         return false;
//         }
// }



function formValidation() 
{
  var fname = document.getElementById('firstName').value;
 
  var pnumber = document.getElementById('phoneNumber').value;
 
  var email = document.getElementById('e-mail').value;
  
  var text = "";

if (firstName(fname)) {
}

if (phoneNumber(pnumber)) {
}

if (Email(email)) {
}

return false;
}

/*first name input validation*/
function firstName(fname) {
var message = document.getElementsByClassName("error-message");
var letters = /^[A-Za-z]+$/;
if ( fname =="" || fname.match(letters)) {
  text="";
  message[0].innerHTML = text;
  return true;
}

else {
  text="First name should contain only letters";
  message[0].innerHTML = text;
  return false;
}
}



/*email address input validation*/
function Email(email) {
var message = document.getElementsByClassName("error-message");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
var atpos = email.indexOf("@");
var dotpos = email.lastIndexOf(".");
        
if ( email =="" || email.match(mailformat) || atpos > 1 && ( dotpos - atpos > 2 )) {
  text="";
  message[2].innerHTML = text;
  return true;
}
       
else {
  text="Wrong email format";
  message[2].innerHTML = text;
  return false;
}
}

/*phone number validation*/
function  phoneNumber(pnumber) {
var message = document.getElementsByClassName("error-message");
var numbers = /^[0-9]+$/;
if ( pnumber =="" || pnumber.match(numbers)) {
  text="";
  message[3].innerHTML = text;
  return true;
}

else {
  text="Phone number should contain only numbers";
  message[3].innerHTML = text;
  return false;
}
}




/*validate password*/
function Password(password) {
var message = document.getElementsByClassName("error-message");
var illegalChars = /[\W_]/; // allow only letters and numbers
if (illegalChars.test(password)) { 
  text="Password contains illegal characters";
  message[5].innerHTML = text;
  return false;
}
else if ( (password.search(/[0-9]+/)==-1) ) {
  text="Password should contain at least one number";
  message[5].innerHTML = text;
  return false;
}
else {
  text="";
  message[5].innerHTML = text;
  return true;
}
}
