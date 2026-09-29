// ======================================
// GYM MASTER TEMPLATE
// Dynamic Gym Data System
// ======================================

async function loadGymData() {

    try {

        const response = await fetch("data/gym-data.json");

        if (!response.ok) {
            throw new Error("Gym data could not be loaded.");
        }

        const gym = await response.json();


        // ==============================
        // GYM NAME
        // ==============================

        document.querySelectorAll(".logo").forEach(element => {
            element.textContent = gym.gymName;
        });


        // ==============================
        // PAGE TITLE
        // ==============================

        document.title =
            `${gym.gymName} | ${gym.tagline}`;


        // ==============================
        // PHONE
        // ==============================

        document.querySelectorAll(
            'a[href^="tel:"]'
        ).forEach(element => {

            element.href =
                `tel:${gym.phone.replace(/\D/g, "")}`;

        });


        // ==============================
        // WHATSAPP
        // ==============================

        document.querySelectorAll(
            'a[href*="wa.me"]'
        ).forEach(element => {

            element.href =
                `https://wa.me/${gym.whatsapp}`;

        });


        // ==============================
        // ADDRESS
        // ==============================

        const location = document.querySelector(".location");

        if (location) {

            location.querySelector("h3").textContent =
                gym.address.line1;

            const paragraphs =
                location.querySelectorAll("p");

            if (paragraphs[0]) {

                paragraphs[0].innerHTML =
                    `${gym.address.line2}<br>
                     ${gym.address.landmark}<br>
                     ${gym.address.city},<br>
                     ${gym.address.state}
                     ${gym.address.pincode}`;

            }

            if (paragraphs[1]) {

                paragraphs[1].innerHTML =
                    `<strong>Opening Hours:</strong><br>
                     ${gym.timings.open} – ${gym.timings.close}`;

            }

        }


        // ==============================
        // PROGRAMS
        // ==============================

        const programElements =
            document.querySelectorAll(".program h3");

        gym.programs.forEach((program, index) => {

            if (programElements[index]) {

                programElements[index].textContent =
                    program;

            }

        });


        // ==============================
        // FREE TRIAL
        // ==============================

        const trialForm =
            document.querySelector("#trial form");

        if (trialForm) {

            trialForm.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();

                    const name =
                        trialForm
                        .querySelector('input[type="text"]')
                        .value.trim();

                    const phone =
                        trialForm
                        .querySelector('input[type="tel"]')
                        .value.trim();

                    const goal =
                        trialForm
                        .querySelector("select")
                        .value;


                    if (!name || !phone) {

                        alert(
                            "Please enter your name and mobile number."
                        );

                        return;

                    }


                    const message =
`Hello ${gym.gymName} 👋

I want to book a Free Trial.

Name: ${name}
Phone: ${phone}
Fitness Goal: ${goal}

Please share the available trial timings.`;


                    const whatsappURL =
                        `https://wa.me/${gym.whatsapp}?text=${encodeURIComponent(message)}`;


                    window.open(
                        whatsappURL,
                        "_blank"
                    );

                }
            );

        }


        // ==============================
        // FOOTER
        // ==============================

        const footer =
            document.querySelector("footer p");

        if (footer) {

            footer.innerHTML =
                `© ${new Date().getFullYear()} ${gym.gymName}. All Rights Reserved.`;

        }


        console.log(
            "Gym data loaded:",
            gym.gymName
        );

    }

    catch (error) {

        console.error(
            "Gym data error:",
            error
        );

    }

}


// Start application

loadGymData();
