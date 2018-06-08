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
    var one = newMatchingDays.getDate1('Thursday');
    var two = newMatchingDays.getDate2('Thursday');
    assert.deepEqual(newMatchingDays.sameDay(one, two), true);
  });
  it('Should return false if both days are not the same', function(){
    var newMatchingDays = Matching_days();
    assert.deepEqual(newMatchingDays.sameDay('Thursday', 'Friday'), false);
  });
  it('should return color red if date1 is select', function(){
    var newMatching_days = Matching_days();
    var one = newMatching_days.getDate1('2018-06-08');
    console.log(newMatching_days.getBothDates(one));
    assert.deepEqual({Friday: {color: "red", dayName: "Friday"},
Monday:{dayName: "Monday"},
Saturday: {dayName: "Saturday"},
Sunday: {dayName: "Sunday"},
Thursday: {dayName: "Thursday"},
Tuesday: {dayName: "Tuesday"},
Wednseday: {dayName: "Wednseday"}}, newMatching_days.getBothDates(one));
  });
});
