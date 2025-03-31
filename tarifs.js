document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tariff-buttons button');
    const tariffCards = document.querySelectorAll('.tariff-card');
    
    const tariffData = {
        "Неделя": {
            "Basic": { oldPrice: "13 900 тг.", newPrice: "12 900 тг.", text: "В неделю за 1 сайт" },
            "Expert": { oldPrice: "15 900 тг.", newPrice: "14 900 тг.", text: "В неделю за 1 сайт" },
            "Enterprise": { oldPrice: "16 900 тг.", newPrice: "15 900 тг.", text: "В неделю за 1 сайт" }
        },
        "Месяц": {
            "Basic": { oldPrice: "49 900 тг.", newPrice: "24 900 тг.", text: "В месяц за 1 сайт" },
            "Expert": { oldPrice: "59 900 тг.", newPrice: "35 900 тг.", text: "В месяц за 1 сайт" },
            "Enterprise": { oldPrice: "79 900 тг.", newPrice: "60 900 тг.", text: "В месяц за 1 сайт" }
        },
        "3 месяца": {
            "Basic": { oldPrice: "79 900 тг.", newPrice: "66 900 тг.", text: "За 3 месяца за 1 сайт" },
            "Expert": { oldPrice: "89 900 тг.", newPrice: "74 900 тг.", text: "За 3 месяца за 1 сайт" },
            "Enterprise": { oldPrice: "99 900 тг.", newPrice: "89 900 тг.", text: "За 3 месяца за 1 сайт" }
        },
        "6 месяцев": {
            "Basic": { oldPrice: "179 900 тг.", newPrice: "149 900 тг.", text: "За 6 месяцев за 1 сайт" },
            "Expert": { oldPrice: "189 900 тг.", newPrice: "154 900 тг.", text: "За 6 месяцев за 1 сайт" },
            "Enterprise": { oldPrice: "259 900 тг.", newPrice: "209 900 тг.", text: "За 6 месяцев за 1 сайт" }
        },
        "Год": {
            "Basic": { oldPrice: "300 900 тг.", newPrice: "259 900 тг.", text: "В год за 1 сайт" },
            "Expert": { oldPrice: "320 900 тг.", newPrice: "300 900 тг.", text: "В год за 1 сайт" },
            "Enterprise": { oldPrice: "500 900 тг.", newPrice: "390 900 тг.", text: "В год за 1 сайт" }
        }
    };
    
    function updateTariffs(period) {
        tariffCards.forEach(card => {
            const name = card.querySelector('.tariff-content h2').textContent.trim();
            const oldPriceEl = card.querySelector('.old-price');
            const newPriceEl = card.querySelector('.new-price');
            const subTextEl = card.querySelector('.sub-text');

            if (tariffData[period] && tariffData[period][name]) {
                oldPriceEl.textContent = tariffData[period][name].oldPrice;
                newPriceEl.textContent = tariffData[period][name].newPrice;
                subTextEl.textContent = tariffData[period][name].text;
            }
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            let period = button.childNodes[0].nodeValue.trim();

            updateTariffs(period);
        });
    });

    updateTariffs("Месяц");
});
