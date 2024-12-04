document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const modalButton = document.getElementById("openModal");
    const closeModalButton = document.getElementById("closeModal");

    // Fixed typo: Changed 'OpenModelButton' to 'modalButton'
    modalButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        // Close modal when clicking outside of it
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});




