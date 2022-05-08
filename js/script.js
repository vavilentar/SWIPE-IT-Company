const formName = document.querySelector('.input-name');
const formEmail = document.querySelector('.input-email');
const formMsg = document.querySelector('.input-msg');

const sendBtn = document.querySelector('.contact-us-btn');

let storageKey = 0;

let userTask = {
	userName: '',
	userEmail: '',
	userMessage: '',
};

sendBtn.addEventListener('click', (e) => {
	e.preventDefault();
	userTask.userName = formName.value;
	userTask.userEmail = formEmail.value;
	userTask.userMessage = formMsg.value;

	formName.value = '';
	formEmail.value = '';
	formMsg.value = '';

	let taskJson = JSON.stringify(userTask);
	storageKey++;
	localStorage.setItem(`${storageKey}`, taskJson);

	console.log(taskJson);
})