var Matching_days = function(){
//Declare a list of days of the week
const weekDays = ['Sunday','Monday','Tuesday','Wednseday','Thursday','Friday','Saturday'];
var dateOne, dateTwo = '';
var getDate1 = function(d1){
  dateOne = new Date(d1);
  dateOne = weekDays[dateOne.getDay()];
  return dateOne;
  }
//Create a function  to get dateTwo
var getDate2 = function(d2){
  var dateTwo = new Date(d2);
  dateTwo = weekDays[dateTwo.getDay()];
  return dateTwo;
};
//Add a function that take in two dates
var sameDay = function(dateOne, dateTwo){
    return dateOne === dateTwo;
}
console.log(sameDay());

var getBothDates = function(d1, d2){
var weekDayMap = {};
for(var i =0; i< weekDays.length; i++){
  var dayIndex = weekDays[i];
  weekDayMap[dayIndex] ={
    dayName: dayIndex
  }
}
console.log(weekDayMap);
return weekDayMap;
}
return {
  getDate1,
  getDate2,
  sameDay,
  getBothDates
};
}
