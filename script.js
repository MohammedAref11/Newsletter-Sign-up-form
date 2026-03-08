const formCon = document.getElementById("formCon");
const input = document.getElementById("form__email-input"); 
const subBtn = document.getElementById("subBtn");
const errorMes = document.getElementById("errorMes");
const successMes = document.getElementById("successMes");
const userEmail = document.getElementById("userEmail");
const successBtn = document.querySelector(".success__dismiss-btn");
const loadingel = document.querySelector(".form__loading");

subBtn.addEventListener("click", () => { 

    let value = "";
    const inputVal = input.value;
    value = inputVal;

    loadingel.style.display = "block";
    subBtn.style.display = "none";

    setTimeout(() => {
        if (value.includes("@") && value.includes("."))  { 
            formCon.style.display = "none";
            successMes.style.display = "flex";
            userEmail.textContent = value;
         }
        else { 
            errorMes.textContent = "Valid email required"
                loadingel.style.display = "none"
                subBtn.style.display = "block"
        }       
    }, 2000);
});

successBtn.addEventListener('click', () => { 
    successMes.style.display = "none";
    formCon.style.display = "flex";
    input.value = "";
    loadingel.style.display = "none";
    subBtn.style.display = "inline-block";
    formCon.removeAttribute("style")
});