document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');
    const styleBoard = document.querySelector('.style-board');

    likeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product');
            const clone = product.cloneNode(true);
            clone.querySelector('.like-button').remove();
            styleBoard.appendChild(clone);
        });
    });
});
