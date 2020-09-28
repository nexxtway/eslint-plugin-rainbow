const RuleTester =  require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-capitalized-props');
const parserOptionsMapper = require('../parserOptionsMapper');

const ruleTester = new RuleTester();

const expectedError = {
    message: 'Do not use capitalized prop names in components',
    type: 'JSXOpeningElement',
};

ruleTester.run('no-capitalized-props', rule, {
    valid: [
        { code: '<Foo bar={value}></Foo>' },
        { code: '<Foo isLoading={isLoading}/>' },
        { code: '<input type="number"/>' },
        { code: '<Foo isLoading={isLoading} {...rest} />' },
    ].map(parserOptionsMapper),
    invalid: [
        { code: '<Foo Bar={value}></Foo>', errors: [expectedError] },  
    ].map(parserOptionsMapper)
});    
