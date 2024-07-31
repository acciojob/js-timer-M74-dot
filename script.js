// write js code here if required
document.addEventListener('DOMContentLoaded',()=>{
	const timer = document.querySelector('#timer');

	const d = new Date();
	const msg = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
	timer.innerHTML = msg;
});
