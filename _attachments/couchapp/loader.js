
function couchapp_load(scripts) {
  for (var i=0; i < scripts.length; i++) {
    document.write('<script src="'+scripts[i]+'"><\/script>')
  };
};

couchapp_load([
  "/_utils/script/sha1.js",
  "/_utils/script/json2.js",
  "/_utils/script/jquery.js",
  "/_utils/script/jquery.couch.js",
  "couchapp/jquery.couch.app.js",
  "couchapp/jquery.couch.app.util.js",
  "couchapp/jquery.mustache.js",
  "couchapp/jquery.evently.js"
]);