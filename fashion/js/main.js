$(document).ready(function() {
  $('select').material_select();
  $('.toggle-btn').on('click', function(){
    var target = $(this).data('target');
    var targetCollape = '#'+target;
    if($(targetCollape).hasClass('in')){
      $(targetCollape).slideUp('fast');
      $(targetCollape).removeClass('in');
    }
    else{
      $(targetCollape).slideDown('fast');
      $(targetCollape).addClass('in');
    }

    //console.log(targetCollape);
    return false;
  })
});
