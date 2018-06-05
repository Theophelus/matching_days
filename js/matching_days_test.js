describe('MATCHING DAYS WIDGET', function(){
  // it('should return date if date1 is selected', function(){
  //   var newMatchingDays = MatchingDays();
  //   newMatchingDays.setDate1 = ('');
  //   assert.equai(true, newMatchingDays.getDate1());
  // });

  it('Should return class red', function(){
    var newMatchingDays = Matching_days();
  var one =  newMatchingDays.getDate1(05-03-2018)
  var two =  newMatchingDays.getDate2(06-04-2018)
    assert.deepEqual(newMatchingDays.getBothDates(one,two))
  })
});
