//switch theme function
const switchTheme = () => {
    const rootElement = document.documentElement;
    let dataTheme = rootElement.getAttribute('data-theme'); // FIXED typo
    let newTheme = (dataTheme === 'light') ? 'dark' : 'light';

    rootElement.setAttribute('data-theme', newTheme);
};

document.querySelector('#mode-switch').addEventListener('click', switchTheme); // FIXED selector

const danceSlider = document.getElementById('dance-slider');
const danceValueDisplay = document.getElementById('default-dance');

danceSlider.addEventListener('input', () => {
    danceValueDisplay.textContent = danceSlider.value;
});
document.querySelector('#mode-switch').addEventListener('click', switchTheme); // FIXED selector

const tempoSlider = document.getElementById('tempo-slider');
const tempoValueDisplay = document.getElementById('default-tempo');

tempoSlider.addEventListener('input', () => {
    tempoValueDisplay.textContent = tempoSlider.value;
});

document.querySelector('#mode-switch').addEventListener('click', switchTheme); // FIXED selector

const lyricsSlider = document.getElementById('lyrics-slider');
const lyricsValueDisplay = document.getElementById('default-lyrics');

lyricsSlider.addEventListener('input', () => {
    lyricsValueDisplay.textContent = lyricsSlider.value;
});

const startButton = document.getElementById('begin-btn')
const nextButton = document.getElementById('next-btn')
const prevButton = document.getElementById('prev-btn')
const submitButton = document.getElementById('submit-btn')
const questions = document.querySelectorAll('.question')
nextButton.addEventListener('click', nextQuestion)
if (prevButton) {
    prevButton.addEventListener('click', prevQuestion);
}
let currentQuestionIndex = 0

startButton.addEventListener('click', startForm)

function startForm() {
    console.log("started")
    currentQuestionIndex = 0;
    startButton.classList.add('hide')
    document.getElementById('showcase').classList.add('hide')
    document.getElementById('logo-nav-visibility').style.visibility = 'visible';
    document.getElementById('controls').classList.remove('hide')
    nextButton.classList.remove('hide')
    prevButton.classList.remove('hide')
    document.getElementById('question-container').classList.remove('hide')
    questions[currentQuestionIndex].classList.remove('hide')
    nextButton.addEventListener('click', nextQuestion)
};

function nextQuestion() {
    questions[currentQuestionIndex].classList.add('hide');

    currentQuestionIndex++;

    if (currentQuestionIndex === 5) {
        // Hide the question container and controls
        questions[currentQuestionIndex].classList.remove('hide');
        nextButton.classList.add('hide');
        submitButton.classList.remove('hide')
        console.log("end")
        return;
    }

    questions[currentQuestionIndex].classList.remove('hide');

    prevButton.classList.remove('hide');
}

function prevQuestion() {
    if (currentQuestionIndex === 0) {
        // Go back to hero section
        document.getElementById('question-container').classList.add('hide');
        document.getElementById('controls').classList.add('hide');
        document.getElementById('logo-nav-visibility').style.visibility = 'hidden';
        document.getElementById('showcase').classList.remove('hide');
        startButton.classList.remove('hide');
        return;
    }

    questions[currentQuestionIndex].classList.add('hide');

    currentQuestionIndex--;

    questions[currentQuestionIndex].classList.remove('hide');
    nextButton.classList.remove('hide')

    if (currentQuestionIndex === 0) {
        prevButton.classList.remove('hide');
    }

}
