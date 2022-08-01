let guestName = document.getElementById('guest-name');
let realGuestName = prompt('Как тебя зовут?');
if (realGuestName) {
    guestName.textContent = realGuestName;
}