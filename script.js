document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.querySelector(".cards");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const cardWidth = 195;
    let scrollAmount = 0;
    const cards = Array.from(cardsContainer.children);
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        cardsContainer.appendChild(clone);
    });

    function moveNext() {
        scrollAmount += cardWidth;
        cardsContainer.style.transition = "transform 0.3s ease-in-out";
        cardsContainer.style.transform = `translateX(-${scrollAmount}px)`;

        setTimeout(() => {
            if (scrollAmount >= cardWidth * cards.length) {
                scrollAmount = 0;
                cardsContainer.style.transition = "none";
                cardsContainer.style.transform = `translateX(0)`;
            }
        }, 300); 
    }

    function movePrev() {
        if (scrollAmount <= 0) {
            scrollAmount = cardWidth * cards.length;
            cardsContainer.style.transition = "none";
            cardsContainer.style.transform = `translateX(-${scrollAmount}px)`;
        }
        setTimeout(() => {
            scrollAmount -= cardWidth;
            cardsContainer.style.transition = "transform 0.3s ease-in-out";
            cardsContainer.style.transform = `translateX(-${scrollAmount}px)`;
        }, 10);
    }

    nextBtn.addEventListener("click", moveNext);
    prevBtn.addEventListener("click", movePrev);
});
