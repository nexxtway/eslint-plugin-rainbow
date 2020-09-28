const RuleTester =  require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-capitalized-props');
const parserOptionsMapper = require('../parserOptionsMapper');

const ruleTester = new RuleTester();

const expectedErrorJsx = {
    message: 'Do not use capitalized property names on components',
    type: 'JSXOpeningElement',
};

const expectedErrorPropTypes = {
    message: 'Do not use capitalized property names on components',
    type: 'Property',
};


ruleTester.run('no-capitalized-props', rule, {
    valid: [
        { code: '<Foo bar={value}></Foo>' },
        { code: '<Foo isLoading={isLoading}/>' },
        { code: '<input type="number"/>' },
        { code: '<Foo isLoading={isLoading} {...rest} />' },
        { code: `Foo.propTypes = {
            bar: PropTypes.string,
        };`},
    ].map(parserOptionsMapper),
    invalid: [
        { code: '<Foo Bar={value}></Foo>', errors: [expectedErrorJsx] },
        { code: `Foo.propTypes = {
            Bar: PropTypes.string,
        };`, errors: [expectedErrorPropTypes] }  
    ].map(parserOptionsMapper)
});    
