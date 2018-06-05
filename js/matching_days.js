document.addEventListener('DOMContentLoaded', function(){
  // get reference for both enterDates
  var week = document.querySelector('.week')
  var dates1 = document.querySelector('.dates1');
  //get reference for script tag
  var templateSource = document.querySelector('#entry-template').innerHTML;
  //Compile
  var template = Handlebars.compile(templateSource);

  var newMatching_days = Matching_days();

  window.addEventListener('load', function(){
    var daysTemplate = template({
      days: newMatching_days.weekdays()
    });
    week.innerHTML = daysTemplate;
  });

  // dates1.addEventListener('change', function(){
  //   // var daysTemplate = template({
  //   //
  //   // });
  // });
});
