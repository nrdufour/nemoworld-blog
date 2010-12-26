function(head, req) {
	var ddoc = this;

	var Mustache = require("vendor/couchapp/lib/mustache"),
		path = require("vendor/couchapp/lib/path").init(req);

	var assetPath = path.asset();
	var templates = ddoc.templates;

	function sendRow(row) {
		var doc = row.value;

		send(Mustache.to_html(templates.post_abstract, {
			title: doc.title,
			id: doc._id,
			created_at: doc.created_at
		}));
	}

	function sendPosts() {
		send(Mustache.to_html(templates.posts_begin, {}));
		while(row = getRow()) {
			sendRow(row);
		}
		send(Mustache.to_html(templates.posts_end, {}));
	}

	provides("html", function() {
		send(Mustache.to_html(templates.header, {
			assetPath: assetPath,
			title: "Last posts"
		}));

		sendPosts();

		return Mustache.to_html(templates.footer, {});
	});
}
