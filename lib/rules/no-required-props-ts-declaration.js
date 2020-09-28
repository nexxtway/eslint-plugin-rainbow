/**
 * @fileoverview Enforce no required props on components d.ts files and prop types.
 * @author Reinier Guerra
 */
const docsUrl = require('../utils/docsUrl');

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            category: 'Typescript Issues',
            description: 'Enforce no required props on components d.ts files and prop types.',
            recommended: true,
            url: docsUrl('no-required-props-ts-declaration'),
        },
    },
    create: (context) => ({
        'TSInterfaceDeclaration > TSInterfaceHeritage[expression.name="BaseProps"]'(node) {
            const parent = node.parent;
            parent.body.body.forEach((prop) => {
                if (!prop.optional) {
                    context.report({
                        node: prop,
                        message: 'Do not use required props on public interface inheriting from BaseProps',
                    });
                }
            });
        }  
    })
};




