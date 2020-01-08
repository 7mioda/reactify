function verifMail()
{
   var email = document.getElementById('mail');
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(email.value))
   {
      alert("veuillez entrer la bonne email");
      return false;
   }
   else
   {
      return true;
   }
}
function verifNum()
{
   var tele = document.getElementById('tel');
   var pattern = /^\(\d{2}\)\s*\d{3}(?:-|\s*)\d{3}$/;
   if(!pattern.test(tele.value))
   {
      alert ("veuillez entrer la bonne format de votre mobile");
      return false;  
   }
   else
   {
      document.getElementById("telAlert").innerHTML = "It's Ok";
      return true;
   }
}
function verifForm()
{
   if (document.getElementById('Fname').value == ""){
      document.getElementById("fnameAlert").innerHTML = "veuillez saisir votre prénom";
      return false;
   } 
   if (document.getElementById('Fname').value !== ""){
      document.getElementById("fnameAlert").innerHTML = '';
  } 
  if (document.getElementById('Lname').value == ""){
   document.getElementById("lnameAlert").innerHTML ="veuillez saisir votre nom";
      return false;
  }
   if( document.getElementById('mail').value == ""){
      document.getElementById("mailAlert").innerHTML ="veuillez saisir votre email";
      return false;
   } 
   if( document.getElementById('bio').value == ""){
      document.getElementById("bioAlert").innerHTML ="veuillez saisir votre Biographie";
      return false;
   }
   if(document.getElementById('tel').value == ""){
      document.getElementById("telAlert").innerHTML ="veuillez saisir votre numero de telephone";
      return false;
   } 
   if( document.getElementById('adress').value == ""){
      document.getElementById("adressAlert").innerHTML ="veuillez saisir votre adresse";
      return false;
   }
   if(verifMail()==false && verifNum()==false){
      return false;
   }
     
   else{
      alert("vos données sont bien envoyé");
      return true;
   }
     
}
