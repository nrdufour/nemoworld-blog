function(doc, req) {  
	var ddoc = this;

	var Mustache = require("vendor/couchapp/lib/mustache"),
	    path = require("vendor/couchapp/lib/path").init(req),
	    markdown = require("vendor/couchapp/lib/markdown");

	var templates = ddoc.templates;

	var assetPath = path.asset();
	provides("html", function() {
		var header = Mustache.to_html(templates.header, {
                        assetPath: assetPath,
                        title: doc.title
                });

		var post_body = markdown.encode(doc.body);

		var body = Mustache.to_html(templates.post, {
			assetPath: assetPath,
			doc: doc,
			post_body: post_body
		});

                var footer = Mustache.to_html(templates.footer, {
                });

		return header + '\n' + body + '\n' + footer;
	});
}

