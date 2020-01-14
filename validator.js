function required()
{
var user_name = document.form.first_name.value;
var last_name = document.form.last_name.value;
var mail = document.form.mail.value;
var bio = document.form.bio.value;
var number = document.form.number.value;
var address = document.form.address.value;
var phone_number = /^\d{8}$/;


if (user_name === "" || last_name === "" || mail ==="" || bio ==="" || number ==="" || address ==="")
{
alert("Please input a Value");
return false;
}
else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.mail.value))){
alert("invalid email address");
return false;
}
else if(!(phone_number.test(form.number.value))){
alert("invalid phone number");
return false;
}
else
return true;
}

function addHoppy()
{
    var textVal = document.getElementById('textVal').value,
    listNode = document.getElementById('list'),
    liNode = document.createElement("LI"),
    txtNode = document.createTextNode(textVal);
    if(textVal !== ""){
        liNode.appendChild(txtNode);
        listNode.appendChild(liNode);
    }else{
        alert('you should enter your hoppy');
        }
}

function validationHoppy(){
    var x = document.getElementById("list").getElementsByTagName("li").length;
    if(x >= 3)
        return true;
    else{
        alert("You must have at least three hobbies");
        return false;
    }
}