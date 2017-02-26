$(document).ready(function() {

  // $('.multi-field-wrapper').each(function() {
  //     var $wrapper = $('.multi-fields', this);
  //     $(".add-field", $(this)).click(function(e) {
  //         $('.multi-field:first-child', $wrapper).clone(true).appendTo($wrapper).find('input').val('').focus();
  //     });
  //     $('.multi-field .remove-field', $wrapper).click(function() {
  //
  //         if ($('.multi-field', $wrapper).length > 1)
  //             $(this).parent('.multi-field').remove();
  //     });
  // });

  $('ul.tabs').tabs();
  $("#libro").click(function() {
   $('ul.tabs').tabs('select_tab', 'test1');
 });
 $("#cap_libro").click(function() {
   $('ul.tabs').tabs('select_tab', 'test2');
 });
  $("#dir_tesis").click(function() {
    $('ul.tabs').tabs('select_tab', 'test3');
  });
  $("#invest").click(function() {
    $('ul.tabs').tabs('select_tab', 'test4');
  });
  $("#art_arbi").click(function() {
    $('ul.tabs').tabs('select_tab', 'test5');
  });
  $("#art_index").click(function() {
    $('ul.tabs').tabs('select_tab', 'test6');
  });
  $("#ponencia").click(function() {
    $('ul.tabs').tabs('select_tab', 'test7');
  });
  $("#mat_didac").click(function() {
    $('ul.tabs').tabs('select_tab', 'test8');
  });
  $("#profesor").click(function() {
    $('ul.tabs').tabs('select_tab', 'test9');
  });

});
