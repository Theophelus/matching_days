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
var sameDay = function(d1, d2){
  var dateOne = new Date(d1);
  var dateTwo = new Date(d2);
  return weekDays[dateOne.getDay() === dateTwo.getDay()];
}

var getBothDates = function(d1, d2){
var weekDayMap = {};
for(var i =0; i<weekDays.length; i++){
  var dayIndex = weekDays[i];
  weekDayMap[dayIndex] ={
    dayName: dayIndex
  }
  console.log(weekDayMap);
    if(dayIndex == d1){
       weekDayMap[dayIndex]= Object.assign({
        color:'red'
      },weekDayMap[dayIndex]);
      if(sameDay(d1,d2)){
        delete weekDayMap[dayIndex].d1;
          weekDayMap[dayIndex] = Object.assign({
            color: 'green'
            },
              weekDayMap[dayIndex]);
          }
    }
    if(dayIndex == d2){
      Object.assign({
        color:'blue'
      }, weekDayMap[dayIndex]);
    if(sameDay(d1,d2)){
          delete weekDayMap[dayIndex].d2;
          weekDayMap[dayIndex] = Object.assign({
            color: 'green'
          }, weekDayMap[dayIndex]);
        };
    }

}
return weekDayMap;
}
return {
  getDate1,
  getDate2,
  // sameDay,
  getBothDates
};
}
