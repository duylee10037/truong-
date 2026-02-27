// Navbar scroll effect
window.addEventListener("scroll", function() {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Counter animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});

// Form submit
document.getElementById("admissionForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Đăng ký thành công!");
});