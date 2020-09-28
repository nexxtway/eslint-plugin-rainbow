/**
 * @fileoverview Enforce no capitalized prop names on components.
 * @author Reinier Guerra
 */
const docsUrl = require('../utils/docsUrl');

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            category: 'JSX Issues',
            description: 'Enforce no capitalized prop names on components.',
            recommended: true,
            url: docsUrl('no-capitalized-props'),
        },
    },
    create: (context) => ({
        JSXOpeningElement(node) {
            node.attributes.forEach((attr) => {
                if (attr.type !== 'JSXSpreadAttribute' && /[A-Z]/.test(attr.name.name[0])) {
                  context.report({
                        node,
                        message: 'Do not use capitalized prop names in components',
                  });  
              }  
            });    
        }
    })
};





