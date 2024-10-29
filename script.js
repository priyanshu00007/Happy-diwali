function updateWisherName() {
    const nameInput = document.getElementById('name-input');
    const wisherName = document.getElementById('wisher-name');
    const updatedName = nameInput.value || 'Priyanshu';
    wisherName.textContent = updatedName;
    localStorage.setItem('wisherName', updatedName);
    nameInput.value = '';
  }
function loadWisherName() {
const storedName = localStorage.getItem('wisherName');
const wisherName = document.getElementById('wisher-name');
wisherName.textContent = storedName || 'Priyanshu';
}