var Matching_days = function(){
//Declare a list of days of the week
const weekDays = ['Sunday','Monday','Tuesday','Wednseday','Thursday','Friday','Saturday'];
var date1, date2 = '';
//Create a function  to get date1
var weekdays = function(){
  return weekDays;
}
var setDate1 = function(d1){
  date1 = new Date(d1);
  date1 = weekdays[date1.getDay()];
  return date1;
  }
//Create a function  to get date2
var setDate2 = function(d2){
  var date2 = new Date(d2);
  date2 = weekdays[date2.getDay()];
  return date2;
};
//Add a function that take in two dates
var sameDay = function(d1, d2){
  // Declare two date variable to store date and pass two parameters
  // into dateOne and dateTwo
  return (setDate1(d1)== setDate2(d2));
}

var getBothDates = function(d1, d2){
var weekDayMap = {};
for(var i =0; i<weekdays.length; i++){
  var dayIndex = weekdays[i];
  weekDayMap[dayIndex] ={
    dayName: dayIndex,
    dayValue: dayIndex
  };
  if(dayIndex == d1){
    Object.assign({
      color:'red'
    }, weekDayMap[dayIndex]);
    if(sameDay(d1,d2)){
      delete weekDayMap[dayIndex].d1;
    }
  }
  if(dayIndex == d2){
    Object.assign({
      color:'blue'
    }, weekDayMap[dayIndex]);
    if(sameDay(d1,d2)){
      delete weekDayMap[dayIndex].d2;
    };
}
}
return weekDayMap;
};
return {
  setDate1,
  setDate2,
  sameDay,
  weekdays,
  getBothDates
};
}
