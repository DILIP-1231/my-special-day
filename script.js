const birthdayMessage = document.getElementById('birthday-message');
const birthdayWishes = document.getElementById('birthday-wishes');
const birthdaySignature = document.getElementById('birthday-signature');

birthdayMessage.addEventListener('mouseover', () => {
	birthdayMessage.style.transform = 'scale(1.1)';
	birthdayMessage.style.color = '#ff69b4';
});

birthdayWishes.addEventListener('click', () => {
	birthdayWishes.style.fontSize = '24px';
	birthdayWishes.style.fontWeight = 'bold';
	birthdayWishes.style.color = '#ff69b4';
});

birthdaySignature.addEventListener('dblclick', () => {
	birthdaySignature.style.fontSize = '18px';
	birthdaySignature.style.fontStyle = 'italic';
	birthdaySignature.style.color = '#666';
});