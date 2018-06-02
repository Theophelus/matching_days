decsribe('MATCHING DAYS WIDGET', function(){
  it('should return date if date1 is selected', function(){
    var newMatchingDays = MatchingDays();
    newMatchingDays.setDate1 = ('');
    assert.equai(true, newMatchingDays.getDate1());
  });
});
