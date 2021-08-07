document.addEventListener('splidesLoaded', function () {
    
    document.getElementById("splide-loader").setAttribute("hidden", true);
    document.getElementById("splide-master").removeAttribute("hidden");

    new Splide('.splide', {
        type  : 'fade',
        rewind: true,
    }).mount();

} );