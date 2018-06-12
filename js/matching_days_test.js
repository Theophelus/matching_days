describe('MATCHING DAYS WIDGET', function(){
  it('should return Thursday if that date1 is selected', function(){
    var newMatchingDays = Matching_days();
    //newMatchingDays.setDate1 = ('7-05-2018');
    assert.deepEqual('Thursday', newMatchingDays.getDate1('2018-06-07'));
  });
  it('should return Thursday if that date2 is selected', function(){
    var newMatchingDays = Matching_days();

    assert.deepEqual('Thursday', newMatchingDays.getDate1('2018-06-07'));
  });
  it('Should return true if both days are the same', function(){
    var newMatchingDays = Matching_days();
    var dateOne = newMatchingDays.getDate1('Thursday');
    var dateTwo = newMatchingDays.getDate2('Thursday');
    assert.deepEqual(newMatchingDays.sameDay(dateOne, dateTwo), true);
  });
  it('Should return false if both days are not the same', function(){
    var newMatchingDays = Matching_days();
    assert.deepEqual(newMatchingDays.sameDay('Thursday', 'Friday'), false);
  });
  it('should check which day of the week is selected in date 1 and assign color red', function(){
    var newMatchingDays = Matching_days();
    var dateOne = newMatchingDays.getDate1('2018-06-08');
    assert.deepEqual({Friday: {color: "red", dayName: "Friday"},
    Monday:{dayName: "Monday"},
    Saturday: {dayName: "Saturday"},
    Sunday: {dayName: "Sunday"},
    Thursday: {dayName: "Thursday"},
    Tuesday: {dayName: "Tuesday"},
    Wednseday: {dayName: "Wednseday"}}, newMatchingDays.getBothDates(dateOne));
  });
  it('should check which day of the week is selected in date 2 and assign color Blue', function(){
    var newMatchingDays = Matching_days();
    var dateOne = newMatchingDays.getDate1();
    var dateTwo = newMatchingDays.getDate2('2018-06-11');
    assert.deepEqual({Friday: {dayName: "Friday"},
    Monday:{color: "blue", dayName: "Monday"},
    Saturday:{dayName: "Saturday"},
    Sunday:{dayName: "Sunday"},
    Thursday:{dayName: "Thursday"},
    Tuesday:{dayName: "Tuesday"},
    Wednseday:{dayName: "Wednseday"}}, newMatchingDays.getBothDates(dateOne,dateTwo));
  });
  it('should highlight dateOne red and dateTwo blue, if doth dates are selected in different days', function(){
    var newMatchingDays = Matching_days();
    var  dateOne = newMatchingDays.getDate1('2018-06-11');
    var dateTwo = newMatchingDays.getDate2('2018-06-13');
    assert.deepEqual({Friday: {dayName: "Friday"},
    Monday: {color: "red", dayName: "Monday"},
    Saturday: {dayName: "Saturday"},
    Sunday: {dayName: "Sunday"},
    Thursday: {dayName: "Thursday"},
    Tuesday: {dayName: "Tuesday"},
    Wednseday: {color: "blue", dayName: "Wednseday"}}, newMatchingDays.getBothDates(dateOne, dateTwo));
  });
  it('should check if same day of date one and date two are selected, if selected assign color green', function(){
    var newMatchingDays = Matching_days();
    var  dateOne = newMatchingDays.getDate1('2018-06-12');
    var dateTwo = newMatchingDays.getDate2('2018-06-12');
    assert.deepEqual({Friday:{dayName: 'Friday'},
    Monday:{dayName: 'Monday'},
    Saturday:{dayName: 'Saturday'},
    Sunday:{dayName: 'Sunday'},
    Thursday:{dayName: 'Thursday'},
    Tuesday:{color: 'green', dayName: 'Tuesday'},
    Wednseday: {dayName: 'Wednseday'}}, newMatchingDays.getBothDates(dateOne, dateTwo));
  });
});
