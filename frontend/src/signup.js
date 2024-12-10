const subutton = document.getElementById("subutton");
const error = document.getElementById("error");
const name_box = document.getElementById("name_box");
const email_box = document.getElementById("email_box");
const password_box = document.getElementById("password_box");
const url = "signupVar"

async function signUp(){
    if (name_box.value != "" && email_box.value != "" && password_box.value != ""){
        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": name_box.value,
                    "email": email_box.value,
                    "password": password_box.value
                })
            });
            name_box.value = "";
            email_box.value = "";
            password_box.value = "";
            error.textContent = "";
        }
        catch(error) {
            alert("unable to send information");
            console.log(error);
        }
  
    }
    else{
        error.textContent = "You need to fill out all fields";
    }
}

subutton.addEventListener("click", signUp);