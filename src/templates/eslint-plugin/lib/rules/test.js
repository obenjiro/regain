/**
 * @fileoverview test rule
 * @author obenjiro
 */
const helper = require('../helper');

module.exports = helper.defineRule({
    meta: {
        docs: {
            description: "testWarn rule",
            category: "Fill me in",
            recommended: false
        },
        schema: [
            // fill in your schema
        ]
    },
    query: `
        files().ast.classes().methods().[name().[$="testWarn"]].key
    `,
    reportCallback: (context, matchedNode) => {
        const { loc } = matchedNode;
        context.report({
            loc,
            message: `Method name "testWarn" is forbidden`
        });
    }
});
