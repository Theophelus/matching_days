var Matching_days = function(){
//Declare a list of days of the week
const weekDays = ['Sunday','Monday','Tuesday','Wednseday','Thursday','Friday','Saturday'];
var dateOne, dateTwo = '';
var getDate1 = function(dateOne){
  dateOne = new Date(dateOne);
  dateOne = weekDays[dateOne.getDay()];
  return dateOne;
  }
//Create a function  to get dateTwo
var getDate2 = function(dateTwo){
  var dateTwo = new Date(dateTwo);
  dateTwo = weekDays[dateTwo.getDay()];
  return dateTwo;
};
//Add a function that take in two dates
var sameDay = function(dateOne, dateTwo){
    return dateOne === dateTwo;
}
console.log(sameDay());

var getBothDates = function(dateOne, dateTwo){
var weekDayMap = {};
for(var i =0; i< weekDays.length; i++){
  var dayIndex = weekDays[i];
  weekDayMap[dayIndex] ={
    dayName: dayIndex
  }
  if(dayIndex == dateOne){
    weekDayMap[dayIndex] = Object.assign({
      color: 'red'
    }, weekDayMap[dayIndex]);
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
