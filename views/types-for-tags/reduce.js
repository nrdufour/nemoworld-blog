function(keys, values, rereduce) {
  var types = []

  for (var i=0; i<values.length; i++) {
    var currentType = values[i].type;
    if (types[currentType]) {
      types[currentType]++;
    }
    else {
      types[currentType] = 1;
    }
  }

  var result = [];
  for(i in types) {
    result.push(i);
  }
  return result;
}
