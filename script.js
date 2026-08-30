/* ================= OPEN WEBSITE ================= */

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

openBtn.addEventListener("click", () => {

    opening.style.transition = "opacity 0.8s ease";
    opening.style.opacity = "0";

    setTimeout(() => {

        opening.classList.add("hidden");
        mainContent.classList.remove("hidden");

        window.scrollTo(0, 0);

    }, 800);

});


/* ================= SCROLL ================= */

function scrollToSection(id) {

    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });

}


/* ================= FLIP CARDS ================= */

const cards = document.querySelectorAll(".reason-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("flipped");

    });

});


/* ================= INSIDE JOKES ================= */

const jokeBtn = document.getElementById("jokeBtn");
const jokeText = document.getElementById("jokeText");

const jokes = [

    "Remember when we said we'd behave? Yeah... that lasted 3 minutes. 😭",

    "Nobody needs to know about THAT incident. 🤨",

    "Our friendship is 50% love and 50% sending each other nonsense.",

    "If anyone asks, we were completely normal that day. 👍",

    "The amount of lore we have is actually concerning.",

    "We really should not be given unsupervised access to a camera. 📸"

];

let jokeIndex = 0;

jokeBtn.addEventListener("click", () => {

    jokeText.style.opacity = "0";

    setTimeout(() => {

        jokeText.textContent = jokes[jokeIndex];

        jokeText.style.opacity = "1";

        jokeIndex++;

        if (jokeIndex >= jokes.length) {
            jokeIndex = 0;
        }

    }, 200);

});


/* ================= FINAL SURPRISE ================= */

const surpriseBtn = document.getElementById("surpriseBtn");
const finalPopup = document.getElementById("finalPopup");
const closePopup = document.getElementById("closePopup");

surpriseBtn.addEventListener("click", () => {

    finalPopup.classList.remove("hidden");

    createConfetti();

});

closePopup.addEventListener("click", () => {

    finalPopup.classList.add("hidden");

});


/* ================= CLICK OUTSIDE POPUP ================= */

finalPopup.addEventListener("click", (event) => {

    if (event.target === finalPopup) {
        finalPopup.classList.add("hidden");
    }

});


/* ================= FLOATING HEARTS ================= */

const floatingContainer =
    document.querySelector(".floating-container");

const symbols = ["♡", "✦", "♥", "✧", "⋆"];

function createFloatingElement() {

    const element = document.createElement("div");

    element.classList.add("floating");

    element.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    element.style.left =
        Math.random() * 100 + "%";

    element.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    element.style.fontSize =
        (12 + Math.random() * 20) + "px";

    floatingContainer.appendChild(element);


    setTimeout(() => {

        element.remove();

    }, 9000);

}

setInterval(createFloatingElement, 800);


/* ================= CONFETTI ================= */

function createConfetti() {

    const confettiSymbols = [
        "🎉",
        "🎀",
        "💗",
        "✨",
        "🎂",
        "♡"
    ];

    for (let i = 0; i < 60; i++) {

        const confetti = document.createElement("div");

        confetti.textContent =
            confettiSymbols[
                Math.floor(Math.random() * confettiSymbols.length)
            ];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        confetti.style.zIndex = "2000";

        confetti.style.pointerEvents = "none";

        const duration =
            2 + Math.random() * 3;

        confetti.style.transition =
            `transform ${duration}s linear, opacity ${duration}s`;

        document.body.appendChild(confetti);


        setTimeout(() => {

            confetti.style.transform =
                `translateY(110vh) rotate(${Math.random() * 720}deg)`;

            confetti.style.opacity = "0";

        }, 50);


        setTimeout(() => {

            confetti.remove();

        }, duration * 1000 + 100);

    }

}