const btn = document.getElementById('action-btn');
const text = document.getElementById('welcome-text');

btn.addEventListener('click', () => {
    text.textContent = "Сім футів під кілем! Сигнал отримано.";
    text.style.color = "green";
    alert("Повідомлення: Курс прокладено!")
