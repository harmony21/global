 $(document).ready(function() {
    var daysExperience = $('.day__lesson.experience'),
    daysBeginner = $('.day__lesson.beginner'),
    daysSwimming = $('.day__lesson.swimming');
    $('.markers-item.experience').click(function(){
        daysExperience.addClass('active');
        daysBeginner.removeClass('active');
        daysSwimming.removeClass('active');
    });
    $('.markers-item.beginner').click(function(){
        daysBeginner.addClass('active');
        daysExperience.removeClass('active');
        daysSwimming.removeClass('active');
    });
    $('.markers-item.swimming').click(function(){
        daysSwimming.addClass('active');
        daysExperience.removeClass('active');
        daysBeginner.removeClass('active');
    });
  })