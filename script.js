const notifyForm = document.querySelector(".notify-form");
const formMessage = document.querySelector(".form-message");

if (notifyForm && formMessage) {
    notifyForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // TODO: send notifyForm.email.value to your backend or email service here.
        // Don't ship the success message below until emails are actually being saved.

        formMessage.textContent = "You're on the list! We'll email you when we launch.";
        notifyForm.reset();
    });
}
