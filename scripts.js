//switch theme function
const switchTheme = () => {
    const rootElement = document.documentElement;
    let dataTheme = rootElement.getAttribute('data-theme'); // FIXED typo
    let newTheme = (dataTheme === 'light') ? 'dark' : 'light';

    rootElement.setAttribute('data-theme', newTheme);
};

document.querySelector('#mode_switch').addEventListener('click', switchTheme); // FIXED selector
