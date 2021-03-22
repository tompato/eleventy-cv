const toggle = document.querySelector('button');
const img = document.querySelector('button img');
const icons = document.querySelectorAll('.social li a img');
const theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if(theme == 'dark') {
    toggleTheme('dark');
}
toggle.addEventListener('click', function() {
    if(document.documentElement.dataset.theme != 'dark') {
        toggleTheme('dark');
    } else {
        toggleTheme();
    }
});
function toggleTheme(style) {
    if(style == 'dark') {
        img.src = "/img/sun.svg";
        icons.forEach(function(icon) {
            toggleIcon(icon, 'light');
        })
        document.documentElement.dataset.theme = 'dark';
        localStorage.setItem('theme', 'dark');
    } else {
        img.src = "/img/moon.svg";
        icons.forEach(function(icon) {
            toggleIcon(icon, null);
        })
        document.documentElement.dataset.theme = '';
        localStorage.setItem('theme', 'light');
    }
}
function toggleIcon(icon, type) {
    let newSrc = icon.getAttribute('src').split('/');
    if(type == 'light') {
        icon.setAttribute('src', newSrc[0] + '/light-' + newSrc[1]);
    } else {
        icon.setAttribute('src', icon.dataset.src);
    }
}