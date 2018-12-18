var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1));
    if (sPageURL !== '') {
        var sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }
};

trainingID = getUrlParameter('id');

var trainingItem = $('.trainings__item[id='+trainingID+']');
var item_title = trainingItem.find('.trainings__title').data('item-title'),
item_desc = trainingItem.data('item-desc'),
item_subtitle1 = trainingItem.data('subtitle1'),
item_subtitle2 = trainingItem.data('subtitle2'),
item_subtitle2_desc = trainingItem.data('subtitle2-desc'),
item_subtitle3 = trainingItem.data('subtitle3'),
item_subtitle3_desc = trainingItem.data('subtitle3-desc'),
item_subtitle4 = trainingItem.data('subtitle4'),
item_subtitle4_desc = trainingItem.data('subtitle4-desc');
$('.training-more__title').html(item_title);
$('.training-more__text').html(item_desc);
$('#subtitle1').html(item_subtitle1);
$('#subtitle2').html(item_subtitle2);
$('#subtitle2-text').html(item_subtitle2_desc);
$('#subtitle3').html(item_subtitle3);
$('#subtitle3-text').html(item_subtitle3_desc);
$('#subtitle4').html(item_subtitle4);
$('#subtitle4-text').html(item_subtitle4_desc);

trainingItem.fancybox().trigger('click');