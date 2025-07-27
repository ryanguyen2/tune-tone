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

