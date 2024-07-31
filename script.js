// write js code here if required
document.addEventListener('DOMContentLoaded',()=>{
	const timer = document.querySelector('#timer');

	const d = new Date();
	const msg = `${d.getDate()}/${d.getMonth()+1}/${getFullYear()}, ${getHours()}:${getMinutes()}:${getSeconds()}`;
	timer.innerHTML = msg;
});
