document.addEventListener("DOMContentLoaded", function(){

    //dark mode
    let DarkMode = true;
    let DarkModeButton = document.getElementById("DarkModeButton");
    
    DarkModeButton.addEventListener("click",function(){
        DarkMode = !DarkMode;
        if (DarkMode==true){
            document.body.style.background = "#131516";
            document.body.style.color = "#d8d4cf";
            DarkModeButton.textContent = "Light mode";
        }else{
            document.body.style.background = "#d8d4cf";
            document.body.style.color = "#131516";
            DarkModeButton.textContent = "Dark mode";
        }
    })
    
    //menu
    let BurgerMenuVisible = true;
    document.getElementById("BurgerButton2").style.display = "none"; //il y a 2 boutons pour ouvrir le burger, un seul sera visible
    
    document.querySelectorAll("div.BurgerButton").forEach(function(BurgerButton){
        BurgerButton.addEventListener("click",function(){
            BurgerMenuVisible = !BurgerMenuVisible
            if (BurgerMenuVisible==false){
                document.querySelectorAll("nav.MenuButton").forEach(function(MenuButton){
                    MenuButton.style.display = "none";
                });
                document.getElementById("logo").style.display = "none";
                document.getElementById("DarkModeButton").style.display = "none";
                document.getElementById("menu").style.display = "none";
    
                document.getElementById("BurgerButton2").style.display = "flex";
            }else{
                document.querySelectorAll("nav.MenuButton").forEach(function(MenuButton){
                    MenuButton.style.display = "block";
                });
                document.getElementById("logo").style.display = "block";
                document.getElementById("DarkModeButton").style.display = "block";
                document.getElementById("menu").style.display = "flex";
    
                document.getElementById("BurgerButton2").style.display = "none";
            }
        })
    })
    
    //formulaire
    if (document.getElementById("SubmitButton")){
        document.getElementById("SubmitButton").addEventListener("click",function(a){
            a.preventDefault();
    
            const proValue = document.getElementById("pro").value;
            const demandeValue = document.getElementById("demande").value;
            const nomValue = document.getElementById("nom").value;
            const emailValue = document.getElementById("email").value;
            const messageValue = document.querySelector('textarea[name="adresse"]').value;
    
            console.log("__________")
            console.log("proValue : "+proValue)
            console.log("demandeValue : "+demandeValue)
            console.log("nomValue : "+nomValue)
            console.log("emailValue : "+emailValue)
            console.log("messageValue : "+messageValue)
    
            let Valid = true
    
            if (proValue == "selectionner"){
                Valid = false
                document.querySelector("#pro").parentNode.querySelector("span.red").textContent = "Veuillez choisir un choix"
            }else{
                document.querySelector("#pro").parentNode.querySelector("span.red").textContent = ""
            }

            if (demandeValue == "selectionner"){
                Valid = false
                document.querySelector("#demande").parentNode.querySelector("span.red").textContent = "Veuillez choisir un choix"
            }else{
                document.querySelector("#demande").parentNode.querySelector("span.red").textContent = ""
            }

            if (nomValue == ""){
                Valid = false
                document.querySelector("#nom").parentNode.querySelector("span.red").textContent = "Veuillez inserer un nom ou un pseudonyme"
            }else{
                document.querySelector("#nom").parentNode.querySelector("span.red").textContent = ""
            }

            if (emailValue == ""){
                Valid = false
                document.querySelector("#email").parentNode.querySelector("span.red").textContent = "Veuillez inserer un email"
            }else{
                document.querySelector("#email").parentNode.querySelector("span.red").textContent = ""
            }
    
            if (messageValue.length < 20 || messageValue.length > 500){
                Valid = false
                document.querySelector("fieldset#message span.red").textContent = "Merci de respecter les limites de carateres"
            }else{
                document.querySelector("fieldset#message span.red").textContent = ""
            }
    
            if (Valid==false){
                alert("Merci de revoir vos informations saisies.")
                document.getElementById("end").textContent = ""
            }else{
                document.getElementById("end").textContent = "Demande envoyé"
            }
    
        })
    }
})