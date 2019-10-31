require("/Users/gzarip/Projects/repo-name/src/Core/helpers/hint.js");

var Handlebars = require("handlebars/runtime");

module.exports = Handlebars.template({
  compiler: [6, ">= 2.0.0-beta.1"],
  main: function(depth0, helpers, partials, data) {
    var alias1 = helpers.helperMissing,
      alias2 = this.escapeExpression;

    return (
      '<div class="intgrtn__section">\n    <div class="intgrtn__section__label">\n        ' +
      alias2(
        (helpers.t || (depth0 && depth0.t) || alias1).call(
          depth0,
          "intgrtn:oauth:sandbox",
          { name: "t", hash: {}, data: data }
        )
      ) +
      "\n        " +
      alias2(
        (helpers.hint || (depth0 && depth0.hint) || alias1).call(depth0, {
          name: "hint",
          hash: {
            location: "label",
            text: (helpers.t || (depth0 && depth0.t) || alias1).call(
              depth0,
              "tltp:profile:oauth_sandbox",
              { name: "t", hash: {}, data: data }
            )
          },
          data: data
        })
      ) +
      '\n    </div>\n    <div class="intgrtn__section__content">\n        ' +
      alias2(
        (helpers.view || (depth0 && depth0.view) || alias1).call(
          depth0,
          depth0 != null ? depth0.manageSandboxTokenViewFactory : depth0,
          { name: "view", hash: {}, data: data }
        )
      ) +
      "\n    </div>\n</div>\n"
    );
  },
  useData: true
});
