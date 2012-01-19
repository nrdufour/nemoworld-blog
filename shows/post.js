function(doc, req) {  
	var ddoc = this;

	var Mustache = require("lib/mustache"),
	    path = require("lib/path").init(req),
	    markdown = require("lib/markdown");

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

