$(document).ready(function() {
    $('.calendar-link').click(function(e) {
        e.preventDefault();
        $(".hide-calendar").css('visibility', 'visible');
    });
    $('.hide-calendar__close').click(function(e) {
        e.preventDefault();
        $(".hide-calendar").css('visibility', 'hidden');
    });
});


$(document).ready(function() {
    var items = $('.calendar-item').length;
    console.log(items);

    $('.listslider').css('width', 'calc(100%*'+items);

    var activeLabels = $('.checked').map(function() {
        return $(this).attr('for');
    })

    console.log(activeLabels);

    var id0 = activeLabels[0];
    var id1 = activeLabels[1];
 
    var activeContent0 = $('#content-'+id0);
    var activeContent1 = $('#content-'+id1);

    var activeWrapper0 = activeContent0.closest('.wrapper-tab');
    var activeWrapper1 = activeContent1.closest('.wrapper-tab');
    activeWrapper0.css('display','block');
    activeWrapper1.css('display','block');
    
    $('label').click(function(e) {
        var id = $(this).attr('for'),
        content = $('#content-'+id),
        wrapper = content.closest('.wrapper-tab'),
        wrappers = wrapper.siblings('.wrapper-tab'),
        labels = $(this).siblings('label');
        if ($(this).hasClass('active')) {
            $(this).addClass('current');
            labels.removeClass('current');
            wrapper.css('display','block');
            console.log(id);
            wrapper.closest('.bx-viewport').css('height','384');
            wrappers.css('display','none');
        }
    })
});