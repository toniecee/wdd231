const timestampInput = document.querySelector('#timestamp');
if (timestampInput) {
    timestampInput.value = new Date().toLocaleString();
}

const openButtons = document.querySelectorAll('.modal-open');
openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.showModal();
        }
    });
});

const closeButtons = document.querySelectorAll('.modal-close');
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('dialog');
        if (modal) {
            modal.close();
        }
    });
});