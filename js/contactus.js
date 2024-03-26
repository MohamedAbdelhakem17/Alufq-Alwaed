const form = document.getElementById("contact-form");
const userName = document.getElementsByName("name")[0];
const userEmail = document.getElementsByName("email")[0];
const userSubject = document.getElementsByName("subject")[0];
const userMessage = document.getElementsByName("massage")[0];
const submitButton = document.getElementsByName("submit")[0];

const emailData = {
    name: "",
    email: "",
    message: "",
    subject: ""
};

const collectData = () => {
    emailData.name = userName.value;
    emailData.email = userEmail.value;
    emailData.message = userMessage.value;
    emailData.subject = userSubject.value;
};

const sendData = async (event) => {
    event.preventDefault();
    collectData()
    const API_URL = "https://alufqalwaed.com/send-email.php"
    const data = await fetch(API_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
    })
    const response = await data.json();
    console.log(response)
}

submitButton.addEventListener("click", sendData)
// fetch('https://example.com/send-email', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(emailData)
// })
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//         throw new Error('Network response was not ok.');
//     })
//     .then(data => {
//         console.log('Email sent successfully:', data);
//         // You can perform additional actions here after the email is sent successfully
//     })
//     .catch(error => {
//         console.error('There was a problem sending the email:', error);
//     });
