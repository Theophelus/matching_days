describe('MATCHING DAYS WIDGET', function(){
  it('should return Thursday if that date1 is selected', function(){
    var newMatchingDays = Matching_days();
    //newMatchingDays.setDate1 = ('7-05-2018');
    assert.deepEqual('Thursday', newMatchingDays.setDate1('7-05-2018'));
  });
  it('should return Thursday if that date2 is selected', function(){
    var newMatchingDays = Matching_days();
    //newMatchingDays.setDate1 = ('7-05-2018');
    assert.deepEqual('Thursday', newMatchingDays.setDate2('7-05-2018'));
  });
  // it('Should return class red', function(){
  //   var newMatchingDays = Matching_days();
  // var one =  newMatchingDays.getDate1(05-03-2018)
  // var two =  newMatchingDays.getDate2(06-04-2018)
  //   assert.deepEqual(newMatchingDays.getBothDates(one,two))
  // })
});
