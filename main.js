
document.getElementById('nextBtn').addEventListener('click', function() {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
});

document.getElementById('attendanceBtn').addEventListener('click', function() {
    alert("Terima kasih sudah mengisi absensi!");
});

AOS.init({
    duration: 1200, // Duration of AOS animations
    once: true // Run animation only once
});

gsap.from(".cover h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".cover h2", { opacity: 0, y: 50, duration: 1 });

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: ".quote",
    triggerHook: 0.8,
    duration: "80%"
})
.setClassToggle(".quote", "fade-in")
.addTo(controller);
