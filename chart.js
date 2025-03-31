document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
        type: 'line', 
        data: {
            labels: ['Окт', 'Нояб', 'Дек', 'Янв', 'Фев', 'Март'], 
            datasets: [{
                label: 'Продажи (тыс. долларов)',
                data: [100, 250, 150, 300, 500, 450], 
                borderColor: '#74c1e8',
                backgroundColor: 'rgba(116, 193, 232, 0.2)',
                borderWidth: 2,
                pointRadius: 2.5,
                pointBackgroundColor: '#0077b6'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
