$(document).ready(function(){
    // Menu
    $('.menu-mobile').click(function(){
        $('.menu-mobile').toggleClass('open');
    });

    // Search
    $('#search-button').click(function(){
        var query = $('#search-input').val();
        $('#search-results').empty();
        if (query) {
            // Simulate search results
            var results = ['Result 1', 'Result 2', 'Result 3'];
            results.forEach(function(result){
                $('#search-results').append('<li class="list-group-item">' + result + '</li>');
            });
        }
    });

    // Carousel
    const swiper = new Swiper('.swiper', {
        loop: true,
        effect: 'coverflow',
        slidesPerView: 1,
    });
});