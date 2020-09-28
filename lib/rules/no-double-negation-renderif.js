/**
 * @fileoverview Enforce no double negation boolean cast on RenderIf component isTrue prop.
 * @author Reinier Guerra
 */
const docsUrl = require('../utils/docsUrl');

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            category: 'JSX Issues',
            description: 'Enforce no double negation boolean cast on RenderIf component isTrue prop.',
            recommended: true,
            url: docsUrl('no-double-negation-renderif'),
        },
    },
    create: (context) => ({
        JSXOpeningElement(node) {
            const isRenderIf = node.name.name === 'RenderIf';
            const propIsTrue = node.attributes.find(attr => attr.name && attr.name.name === 'isTrue');
            const useDoubleNegation = propIsTrue 
                && propIsTrue.value && propIsTrue.value.type === 'JSXExpressionContainer'
                && propIsTrue.value.expression.type === 'UnaryExpression' && propIsTrue.value.expression.operator === '!'
                && propIsTrue.value.expression.argument.type === 'UnaryExpression' && propIsTrue.value.expression.argument.operator === '!';
                if (isRenderIf && useDoubleNegation) {
                  context.report({
                    node,
                    message: 'Do not use double negation on RenderIf. The boolean cast is done inside of the component.',
                });	 	
            }
        }
    })
};
