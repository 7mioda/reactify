function checkIfEmpty(form){
  
  for (var i = 0; i < form.length; i++) {
    if(form[i] == undefined || form[i] == ''){
      switch(i){
        case 0:
          document.getElementById('first_name_check').setAttribute('style', 'display: block;color: red;');
          document.getElementById('first_name').setAttribute('style', 'border: 2px solid red;');
        break;
        case 1:
          document.getElementById('last_name_check').setAttribute('style', 'display: block;color: red;');
          document.getElementById('last_name').setAttribute('style', 'border: 2px solid red;');
        break;
        case 2:
          document.getElementById('email_check').setAttribute('style', 'display: block;color: red;');
          document.getElementById('email').setAttribute('style', 'border: 2px solid red;');
        break;
        case 3:
          document.getElementById('bio_check').setAttribute('style', 'display: block;color: red;');
          document.getElementById('bio').setAttribute('style', 'border: 2px solid red;');
        break;
        case 4:
          document.getElementById('tel_number_check').setAttribute('style', 'display: block;color: red;');
          document.getElementById('tel_number').setAttribute('style', 'border: 2px solid red;');
        break;
        case 5:
          document.getElementById('address_check').setAttribute('style', 'display: block;color: red;');
          document.getElementById('address').setAttribute('style', 'border: 2px solid red;');
        break;
      }
    }else if(form[i] != undefined && form[i] != ''){
      switch(i){
        case 0:
          document.getElementById('first_name_check').setAttribute('style', 'display: none;');
          document.getElementById('first_name').setAttribute('style', '');
        break;
        case 1:
          document.getElementById('last_name_check').setAttribute('style', 'display: none;');
          document.getElementById('last_name').setAttribute('style', '');
        break;
        case 2:
          document.getElementById('email_check').setAttribute('style', 'display: none;');
          document.getElementById('email').setAttribute('style', '');
        break;
        case 3:
          document.getElementById('bio_check').setAttribute('style', 'display: none;');
          document.getElementById('bio').setAttribute('style', '');
        break;
        case 4:
          document.getElementById('tel_number_check').setAttribute('style', 'display: none;');
          document.getElementById('tel_number').setAttribute('style', '');
        break;
        case 5:
          document.getElementById('address_check').setAttribute('style', 'display: none;');
          document.getElementById('address').setAttribute('style', '');
        break;
      }
    }
  }

}

function checkEmailFormat(email){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!email.match(mailformat)){
    document.getElementById('email_check_format').setAttribute('style', 'display: block;color: red;');
    document.getElementById('email').setAttribute('style', 'border: 2px solid red;');
  }else{
    document.getElementById('email_check_format').setAttribute('style', 'display: none;');
    document.getElementById('email').setAttribute('style', '');
  }
}

function checkPhoneNumber(tel_number){
  if(tel_number.length >8){
    document.getElementById('tel_number').setAttribute('style', 'border: 2px solid red;');
    document.getElementById('tel_number_check_max').setAttribute('style', 'display: block;color: red;');
  }else{
    document.getElementById('tel_number').setAttribute('style', '');
    document.getElementById('tel_number_check_max').setAttribute('style', 'display: none;');
  }
  if(isNaN(tel_number)){
    document.getElementById('tel_number').setAttribute('style', 'border: 2px solid red;');
    document.getElementById('tel_number_check_char').setAttribute('style', 'display: block;color: red;');
  }else{
    document.getElementById('tel_number').setAttribute('style', '');
    document.getElementById('tel_number_check_char').setAttribute('style', 'display: none;');
  }

}

function validation(){
  var first_name = document.getElementById('first_name').value;
  var last_name = document.getElementById('last_name').value;
  var email = document.getElementById('email').value;
  var bio = document.getElementById('bio').value;
  var tel_number = document.getElementById('tel_number').value;
  var address = document.getElementById('address').value;

  var form = [first_name,last_name,email,bio,tel_number,address];
  
  checkIfEmpty(form);
  checkEmailFormat(email);

}
