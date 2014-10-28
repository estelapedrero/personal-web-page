var caja=document.getElementsByClassName('magia');

var texto=document.getElementsByClassName('imgs_txt');


function quitar(e){
	e.target.className='img_transp';
	e.target.firstElementChild.className=('imgs_circulo');
}
function poner(e){
	e.target.className='magia';
	e.target.firstElementChild.className=('imgs_txt');
}

for(var i = 0; i < caja.length; i++){
    caja[i].addEventListener('mouseenter', quitar);
    caja[i].addEventListener('mouseleave', poner);
}
