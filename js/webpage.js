var imagen=document.getElementsByClassName('img_info')

var texto=document.getElementsByClassName('imgs_txt')


function quitar(e){
	e.target.className='img_transp'
}
function poner(e){
	e.target.className='img_info'
}

for(var i = 0; i < imagen.length; i++){
    imagen[i].addEventListener('mouseenter', quitar);
    imagen[i].addEventListener('mouseleave', poner);
}
