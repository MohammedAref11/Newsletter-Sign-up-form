# Sign-up Newsletter Form

Here is the Website Link [Click Here](https://mohammedaref11.github.io/Newsletter-Sign-up-form/)

Here is the link if you want to try the challenge [Click Here](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv)

I had Some Challenges with validating user input i hade to make sure that the user will not see the success message unless his email was valid so i used `includes` method and made sure to push the value of the input into a string variable so validating 
will be simpiler i also made sure that is displays the user email on success message.

```js 
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

```

# Images of the website on Different Screen Sizes

## Desktop
![Desktop Page](./result-images/Desktop%20Page.png)



## Tablets
![Desktop Page](./result-images/Tablet%20Page.png)




## Mobile
![Mobile Page](./result-images/Mobile%20Page.png)








