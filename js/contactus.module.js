const form = document.getElementById("contact-form");
const userName = document.getElementsByName("name")[0];
const userEmail = document.getElementsByName("email")[0];
const userSubject = document.getElementsByName("subject")[0];
const userMessage = document.getElementsByName("massage")[0];
const submitButton = document.getElementsByName("submit")[0];
const mainError = document.getElementById("main-error")
const nameError = document.getElementById("name-error")
const emailError = document.getElementById("email-error")
const subjectError = document.getElementById("subject-error")
const massageError = document.getElementById("massage-error")
let timeoutId;
let isLoad = false;

let emailData = {
    name: "",
    email: "",
    message: "",
    subject: ""
};

const collectData = () => {
    emailData = {
        name: userName.value,
        email: userEmail.value,
        message: userMessage.value,
        subject: userSubject.value
    };

    return emailData
};

const showError = (element, massage) => {
    element.classList.remove("d-none")
    element.innerHTML = massage
}

function showLoader() {
    submitButton.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`
    submitButton.disabled = true;
}

function hideLoader() {
    submitButton.innerHTML = "Send Massage"
    submitButton.disabled = false;
}

const sendData = async (emailData) => {
    try {
        showLoader()
        const API_URL = "https://alufqalwaed.com/send-email.php"
        const data = await fetch(API_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailData)
        })
        const response = await data.json();
        if (response.status) {
            mainError.classList.add("text-success")
            showError(mainError, response.message)
            userName.value = ""
            userEmail.value = ""
            userMessage.value = ""
            userSubject.value = ""
            timeoutId = setTimeout(() => {
                mainError.classList.add("d-none")
                mainError.classList.remove("text-success")
                clearTimeout(timeoutId)
            }, 1500)
        } else {
            showError(mainError, response.message)
            const { errors } = response
            errors.name && showError(nameError, errors.name)
            errors.email && showError(emailError, errors.email)
            errors.message && showError(massageError, errors.message)
            errors.subject && showError(subjectError, errors.subject)
        }
        hideLoader()
    } catch {
        showError(mainError, "Unable to connect to the internet. Please check your network connection and try again")
        hideLoader()
    }
}

const handelSubmit = (event) => {
    event.preventDefault();
    mainError.innerHTML = ""
    nameError.innerHTML = ""
    emailError.innerHTML = ""
    subjectError.innerHTML = ""
    massageError.innerHTML = ""
    const data = collectData();
    const isEmpty = Object.values(data).every(item => item.trim() !== "")
    isEmpty ? sendData(data) : showError(mainError, "All fields must be filled")

}

submitButton.addEventListener("click", handelSubmit)
form.addEventListener("submit", handelSubmit)