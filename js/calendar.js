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

    $('.listslider').css('width', 'calc(100%*'+items);

    var activeLabels = $('.checked').map(function() {
        return $(this).attr('for');
    })
    var contentTabs = [];
    for (var i = 0; i < activeLabels.length; i++) {
        contentTabs.push(activeLabels[i]);
    }

    var activeContents = [];
    for (var i = 0; i < activeLabels.length; i++) {
        activeContents.push('#content-'+activeLabels[i]);
    }

    var activeWrappers = [];
    for (var i = 0; i < activeContents.length; i++) {
        activeWrappers.push($(activeContents[i]).closest('.wrapper-tab').css('display', 'block'));
    }
   
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
            wrapper.closest('.bx-viewport').css('height','384');
            wrappers.css('display','none');
        }
    })
});