document.addEventListener('splidesLoaded', function () {
    setTimeout(function(){
        new Splide('.splide', {
            type  : 'fade',
	        rewind: true,
        }).mount();
    }, 500);    
} );