function(doc) {
  if (doc.tags && doc.type) {
    var i;
    for(i in doc.tags) {
      emit(doc.tags[i], doc);
    }
  }  
}
