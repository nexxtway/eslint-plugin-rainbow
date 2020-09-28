/**
 * @fileoverview Static AST checker for React Rainbow Components projects
 * @author Reinier Guerra
 */
module.exports = {
    rules: {
        'no-double-negation-renderif': require('./rules/no-double-negation-renderif'),
        'no-capitalized-props': require('./rules/no-capitalized-props'),
        'no-required-props-ts-declaration': require('./rules/no-required-props-ts-declaration'),
    },
    configs: {
        recommended: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
               },
            },   
        },
        rules: {
            'rainbow/no-double-negation-renderif': 2,
            'no-capitalized-props': 2,
        }
    }      
};
