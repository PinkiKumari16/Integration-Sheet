const scriptURL = "https://script.google.com/macros/s/AKfycby1oIsmxaSAYkcT5eI5QRTvsbUizvimplmrRd5S6PiDAgBGKpVAJgdQAv5FzNzcP1fjgA/exec"

const form = document.forms['google'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message));
});
