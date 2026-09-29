// ================================
// FITNESS TRACK
// GYM MASTER TEMPLATE
// ================================

// Gym WhatsApp number
const gymWhatsApp = "919667200924";


// ================================
// FREE TRIAL FORM
// ================================

const trialForm = document.querySelector("#trial form");

if (trialForm) {

    trialForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            trialForm.querySelector('input[type="text"]').value.trim();

        const phone =
            trialForm.querySelector('input[type="tel"]').value.trim();

        const goal =
            trialForm.querySelector("select").value;


        if (!name || !phone) {

            alert("Please enter your name and mobile number.");

            return;
        }


        const message =
`Hello Fitness Track 👋

I want to book a Free Trial.

Name: ${name}
Phone: ${phone}
Fitness Goal: ${goal}

Please share the available trial timings.`;

        const whatsappURL =
            `https://wa.me/${gymWhatsApp}?text=${encodeURIComponent(message)}`;


        window.open(whatsappURL, "_blank");

    });

}


// ================================
// CURRENT YEAR
// ================================

const yearElement = document.querySelector("footer p");

if (yearElement) {

    yearElement.innerHTML =
        `© ${new Date().getFullYear()} Fitness Track. All Rights Reserved.`;

}
