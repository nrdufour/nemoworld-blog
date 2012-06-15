function(head, req) {
	var ddoc = this;

	var Mustache = require("lib/mustache"),
		path = require("lib/path").init(req);

    var limit = req.query.limit;
    var isMain = limit != undefined;

	var assetPath = path.asset();
	var templates = ddoc.templates;

	function sendPosts(isMain) {
        var posts = [];
		while(row = getRow()) {
            var doc = row.value;
            var date = new Date(doc["created_at"]);
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            doc["created_at_year"] = year;
            doc["created_at_month"] = (month < 10 ? "0" + month : month);
            doc["created_at_day"] = (day < 10 ? "0" + day : day);
			posts.push(doc);
		}
		send(Mustache.to_html(
            templates.posts, 
            {
                isMain: isMain,
                posts: posts
            }
        ));
	}

	provides("html", function() {
		send(Mustache.to_html(templates.header, {
			assetPath: assetPath,
			title: "Last posts"
		}));

		sendPosts(isMain);

		return Mustache.to_html(templates.footer, {});
	});
}
