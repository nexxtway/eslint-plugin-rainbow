/**
 * @fileoverview Static AST checker for React Rainbow Components projects
 * @author Reinier Guerra
 */
module.exports = {
    rules: {
        'no-double-negation-renderif': require('./rules/no-double-negation-renderif')
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
        }
    }      
};
