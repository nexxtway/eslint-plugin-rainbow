/**
 * @fileoverview Enforce no capitalized prop names on components.
 * @author Reinier Guerra
 */
const docsUrl = require('../utils/docsUrl');

const isCapitalized = (str) => {
	return /[A-Z]/.test(str[0]);
};

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
                if (attr.type !== 'JSXSpreadAttribute' && isCapitalized(attr.name.name[0])) {
                    context.report({
                        node,
                        message: 'Do not use capitalized property names on components',
                    });  
                }   
            });    
        },
        MemberExpression(node) {
            if (node.property.name === 'propTypes') {
                const obj = node.parent.right;
                if (obj.type === 'ObjectExpression') {
                    obj.properties.forEach((prop) => {
                        if (prop.type !== 'SpreadElement' && prop.type !== 'ExperimentalSpreadProperty' && isCapitalized(prop.key.name )) {
                            context.report({ 
                                node: prop,
                                message: 'Do not use capitalized property names on components'
                            })
                        }	
                    })
                } 
            }
        }
    })
};





