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
      alert("veuillez entrer la bonne format de votre mobile");
      }
   else
   {
      return true;
   }
}
function verifForm()
{
   if (document.getElementById('Fname').value == ""){
      alert ("veuillez saisir votre nom");
      return false;
   }   
  if (document.getElementById('Lname').value == ""){
   alert ("veuillez saisir votre nom");
      return false;
  }
   if( document.getElementById('mail').value == ""){
   alert ("veuillez saisir votre email");
      return false;
   }
   if( document.getElementById('bio').value == ""){
      alert ("veuillez saisir votre Biographie");
      return false;
   }
   if(document.getElementById('tel').value == ""){
      alert ("veuillez saisir votre numero de telephone");
      return false;
   }
   if( document.getElementById('adress').value == ""){
      alert ("veuillez saisir votre adresse");
      return false;
   }
   
   else{
      alert("vos données sont bien envoyé");
   }
     
}
