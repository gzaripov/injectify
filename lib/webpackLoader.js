const path = require('path');
const injectify = require('./injectify');

module.exports = function(content, options) {
    this.cacheable();

    const source = injectify.compile(content, options);

    return source.replace(/require\(.(\/.*).\)/g, (_, modulePath) => {
        if (!modulePath.startsWith(this.rootContext)) {
            throw new Error(
                `Module ${this.context} uses requires ${modulePath} module ` +
                    `that is outside current working directory`
            );
        }

        this.addDependency(modulePath);

        if (modulePath.includes('node_modules')) {
            const parts = modulePath.split('node_modules/');

            // some packages contains node_modules inside, dont use module require for them
            if (parts.length === 2) {
                return `require("${parts[1]}")`;
            }
        }

        const relativePath = path.relative(this.context, modulePath);

        return `require("${relativePath}")`;
    });
};
