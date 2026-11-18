const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

hamButton.setAttribute(
    'aria-expanded',
    String(navigation.classList.contains('open'))
);