document.addEventListener("DOMContentLoaded",function(e){null!=sessionStorage.getItem("auth")&&(Swal.fire({position:"center",title:"Du bist bereits eingeloggt.",showConfirmButton:!1,timer:1500}),this.location.replace("/archiv")),document.getElementById("email-form").addEventListener("submit",async function(e){await e.preventDefault(),await e.stopPropagation();e=document.getElementById("login-btn");e.value="Einen Moment bitte...",e.style.backgroundColor="#82736b";var t=document.getElementById("email").value,n=document.getElementById("Passwort").value;try{var i=await fetch("https://bildzeitschrift.netlify.app/.netlify/functions/user",{method:"POST",cache:"no-cache",body:JSON.stringify({email:t,password:n})});200==i.status?(sessionStorage.setItem("auth",i.headers.get("Authorization")),Swal.fire({position:"center",icon:"success",title:"Anmeldung erfolgreich",showConfirmButton:!1,timer:1500}),location.replace("/archiv")):403==i.status?Swal.fire({position:"center",icon:"error",title:"Ungültige Anmeldeinformationen",showConfirmButton:!1,timer:1500}):401==i.status&&Swal.fire({position:"center",icon:"info",title:"Sie müssen die E-Mail-Adresse bestätigen, bevor Sie sich anmelden können.",showConfirmButton:!1,timer:1500})}catch(e){console.log(e.message)}e.value="Anmelden",e.style.backgroundColor="#bf8563"},!0)});