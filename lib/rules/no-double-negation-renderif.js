/**
 * @fileoverview Enforce no double negation boolean cast on RenderIf component isTrue prop.
 * @author Reinier Guerra
 */
module.exports = {
    create: (context) => ({
        JSXOpeningElement(node) {
            const isRenderIf = node.name.name === 'RenderIf';
            const propIsTrue = node.attributes.find(attr => attr.name.name === 'isTrue');
            const useDoubleNegation = propIsTrue 
                && propIsTrue.value.type === 'JSXExpressionContainer'
                && propIsTrue.value.expression.type === 'UnaryExpression' && propIsTrue.value.expression.operator === '!'
                && propIsTrue.value.expression.argument.type === 'UnaryExpression' && propIsTrue.value.expression.argument.operator === '!';
                if (isRenderIf && useDoubleNegation) {
                  context.report({
                    node,
                    message: 'Do not use double negation on RenderIf. It\'s done inside of the component.',
                });	 	
            }
        }
    })
};
