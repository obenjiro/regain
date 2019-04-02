/**
 * @fileoverview test rule
 * @author obenjiro
 */
const jora = require('jora');

const discovery = {
    query: function(query, data) {
        return jora(query, { methods: helpers })(data);
    }
}

const helpers = {
    files: (current, regexp) => {
      if (regexp == null) {
        regexp = /./;
      }
      if (!(regexp instanceof RegExp)) {
        throw new Error('you mast pass regexp as argument');
      }
      return discovery.query('..children', current)
        .filter(file => file && file.path && file.path.match(regexp));
    },
    slice: (current, start, end) => current.slice(start, end),
    tsFiles: current =>
        discovery.query('..children.[extension=".ts"]', current),
    jsFiles: current =>
        discovery.query('..children.[extension=".js"]', current),
    jsonFiles: current =>
        discovery.query('..children.[extension=".json"]', current),
    decorators: current =>
        discovery.query(
            "$.program.body.declaration.decorators or $.decorators",
            current
        ),
    exports: current =>
        discovery.query(
            '$.program.body.[type="ExportNamedDeclaration"]',
            current
        ),
    variables: current =>
        discovery.query(
            '$.program.body.[type="ExportNamedDeclaration"].declaration.declarations',
            current
        ),
    classes: current =>
        discovery.query(
            '$.program.body.declaration.[type="ClassDeclaration"] or $.program.body.[type="ClassDeclaration"]',
            current
        ),
    implements: current => discovery.query("$.implements", current),
    name: current =>
        discovery.query(
            "$.id.name or $.key.name or $.expression.callee.name or $.expression.name or $.name",
            current
        ),
    properties: current =>
        discovery.query(
            '$.expression.arguments.properties or $.body.body.[type="ClassProperty"] or $.properties',
            current
        ),
    methods: current =>
        discovery.query(
            '$.body.body.[type="MethodDefinition"] or $.program.body.[type="FunctionDeclaration"]',
            current
        ),
    literalValue: current =>
        discovery.query("$.value.value or $.value.elements.value", current),
    first: current => discovery.query("$.pick(0)", current),
    second: current => discovery.query("$.pick(1)", current),
    last: current => discovery.query("$.pick($.size() - 1)", current),
    arguments: current =>
        discovery.query(
            "$.expression.arguments or $.params or ($.value.params.(parameter or $))",
            current
        )
};

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports.defineRule = ({
    meta,
    query,
    reportCallback
}) => {
    return {
        meta,

        create: (context) => ({
            Program: (program) => {
                const results = discovery.query(query, {
                    children: {
                        path: context.getFilename(),
                        extension: '.js',
                        ast: { program }
                    }
                });

                if (results.length > 0) {
                    results.forEach((result) => {
                      reportCallback(context, result)
                    })
                }
            }
        })
    };
}
