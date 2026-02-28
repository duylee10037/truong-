// Navbar scroll effect
window.addEventListener("scroll", function() {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Counter animation
const counters = document.querySelectorAll(".counter");

function animateCounter(el, target) {
    let count = 0;
    const speed = 20;

    function update() {
        const increment = Math.ceil((target - count) / speed);
        count += increment;

        if (count < target) {
            el.innerText = count;
            requestAnimationFrame(update);
        } else {
            el.innerText = target;
        }
    }

    update();
}

function handleScrollCounter() {
    counters.forEach(counter => {
        const rect = counter.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && !counter.classList.contains("done")) {
            counter.classList.add("done");
            const target = +counter.getAttribute("data-target");
            animateCounter(counter, target);
        }
    });
}

window.addEventListener("scroll", handleScrollCounter);

counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    animateCounter(counter, target);
});




const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});


window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    hero.style.backgroundPositionY = window.scrollY * 0.5 + "px";
});


window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.querySelectorAll(".news-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 10;
        const rotateY = (x - centerX) / 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});


const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

document.querySelectorAll(".btn-primary").forEach(button => {
    button.addEventListener("click", function(e) {
        const circle = document.createElement("span");
        const diameter = Math.max(this.clientWidth, this.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;
        circle.style.top = `${e.clientY - this.offsetTop - radius}px`;
        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];
        if (ripple) ripple.remove();

        this.appendChild(circle);
    });
});


const form = document.getElementById("admissionForm");
const toast = document.getElementById("toast");
const logo = document.getElementById("formLogo");

document.querySelectorAll("#admissionForm input").forEach(input => {
    input.addEventListener("focus", () => {
        logo.classList.add("active");
    });

    input.addEventListener("blur", () => {
        logo.classList.remove("active");
    });
});

form.addEventListener("submit", function(e) {
    e.preventDefault();

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

    form.reset();
});


document.querySelectorAll(".program-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height / 2) / 20;
        const rotateY = (x - rect.width / 2) / 20;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});


const text = document.querySelector(".hero-slogan");
const original = text.innerText;
text.innerText = "";

let i = 0;
function typeWriter() {
    if (i < original.length) {
        text.innerText += original.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}
typeWriter();

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
    backTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backTop.onclick = () => window.scrollTo({top:0, behavior:"smooth"});

window.addEventListener("scroll", function() {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});
