// Скрипт 1: Вывод текущей даты по нажатию кнопки
function showDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    alert(`Сегодня: ${now.toLocaleDateString('ru-RU', options)}`);
}

// Скрипт 2: Изменение цвета фона
function changeBackground() {
    const colors = ['#f5f5f5', '#e8f4f8', '#f8e8e8', '#e8f8ed'];
    const currentColor = document.body.style.backgroundColor;
    let newColor;
    
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);
    
    document.body.style.backgroundColor = newColor;
}

// Скрипт 3: Часы в заголовке
let clockInterval;

function startClock() {
    updateTitleClock();
    clockInterval = setInterval(updateTitleClock, 1000);
}

function updateTitleClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ru-RU', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    document.title = `Персонажи | ${timeString}`;
}

// Скрипт 4: Автопрокрутка текста
setTimeout(() => {
    const scrollElement = document.getElementById('text-scroll');
    if (scrollElement) {
        scrollElement.style.overflow = 'auto';
        scrollElement.style.height = '100px';
        scrollElement.innerHTML = 'Текст для прокрутки '.repeat(20);
    }
}, 5000);

// Скрипт 5: Удаление слов длиннее 7 букв
function processText() {
    const sampleText = "Роман Мастер и Маргарита содержит глубокий философский смысл";
    const words = sampleText.split(' ');
    const shortWords = words.filter(word => word.length <= 7);
    const result = shortWords.join(' ');
    
    alert(`Исходный текст: ${sampleText}\n\nПосле обработки: ${result}`);
}

// Скрипт 6: Найти частую букву
function findFrequentLetter() {
    const text = "Мастер и Маргарита".toLowerCase();
    const letters = {};
    
    for (let char of text) {
        if (char.match(/[а-я]/)) {
            letters[char] = (letters[char] || 0) + 1;
        }
    }
    
    let maxLetter = '';
    let maxCount = 0;
    
    for (let letter in letters) {
        if (letters[letter] > maxCount) {
            maxCount = letters[letter];
            maxLetter = letter;
        }
    }
    
    alert(`В тексте "${text}"\nЧаще всего встречается буква "${maxLetter}" (${maxCount} раз)`);
}