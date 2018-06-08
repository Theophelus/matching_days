document.addEventListener('DOMContentLoaded', function(){
  // get reference for both enterDates
  var week = document.querySelector('.week');
  var date1 = document.querySelector('.dates1');
  var date2 = document.querySelector('.dates2');
  //get reference for script tag
  var templateSource = document.querySelector('#entry-template').innerHTML;
  //Compile
  var template = Handlebars.compile(templateSource);

  var newMatching_days = Matching_days();

  window.addEventListener('load', function(){
    var daysTemplate = template({
      days: newMatching_days.getBothDates()
    });
    week.innerHTML = daysTemplate;
  });
  date1.addEventListener('change', function(){
    var daysTemplate = template({
      days: newMatching_days.getBothDates(newMatching_days.getDate1(date1.value), newMatching_days.getDate2(date2.value))
    });
    week.innerHTML = daysTemplate;
  });
  date2.addEventListener('change', function(){
    var daysTemplate = template({
      days: newMatching_days.getBothDates(newMatching_days.getDate1(date1.value), newMatching_days.getDate2(date2.value))
    });
    week.innerHTML = daysTemplate;
  });
});
