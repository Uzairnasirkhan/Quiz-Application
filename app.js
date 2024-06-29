var formContainer = document.getElementById("formContainer")
var startContainer = document.getElementById("startContainer")
var parent = document.getElementById("parent")


function formSubmitHandler(){
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var nameError = document.getElementById("nameError")
    var emailError = document.getElementById("emailError")


    if (!name.value) {
        nameError.className = "show"
        nameError.style.color = "red"
        return
    }

    if (!email.value) {
        emailError.className = "show"
        emailError.style.color = "red"
        return
    }
   

    localStorage.setItem("name", name.value)
    localStorage.setItem("email", email.value)
    formContainer.className = "hide"
    startContainer.className = "show quizbutton"
    parent.className = "hide parent"
}
