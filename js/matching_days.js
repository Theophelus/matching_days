document.addEventListener('DOMContentLoaded', function(){
  // get reference for both enterDates
  var week = document.querySelector('.week');
  var dates1 = document.querySelector('.dates1');
  var dates2 = document.querySelector('.dates2');
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
  dates1.addEventListener('change', function(){
    var daysTemplate = template({
      days: newMatching_days.getBothDates(newMatching_days.getDate1(dates1.value), newMatching_days.getDate2(dates2.value))
    });
    week.innerHTML = daysTemplate;
  });
  dates2.addEventListener('change', function(){
    var daysTemplate = template({
      days: newMatching_days.getBothDates(newMatching_days.getDate1(dates1.value), newMatching_days.getDate2(dates2.value))
    });
    week.innerHTML = daysTemplate;
  });
});
