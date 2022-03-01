	//const nav = document.querySelector(".abrirMenu");
	const menu = document.querySelector(".menu");
	const btnMenu = document.querySelector(".btnAbrir");
	const sair = document.querySelector(".sair");


	sair.addEventListener('click',function(){
		menu.classList.remove('menuAbrir')
		
		});
	btnMenu.addEventListener('click',function(){
		menu.classList.add('menuAbrir')
		
		});
