function(doc) {
  if (doc.created_at && doc.type == "post") {
    emit(doc.created_at, doc);
  }
};
