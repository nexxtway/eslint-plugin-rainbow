const RuleTester =  require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-double-negation-renderif');
const parserOptionsMapper = require('../parserOptionsMapper');

const ruleTester = new RuleTester();

const expectedError = {
    message: 'Do not use double negation on RenderIf. The boolean cast is done inside of the component.',
    type: 'JSXOpeningElement',
};

ruleTester.run('no-double-negation-renderif', rule, {
    valid: [
        { code: '<RenderIf isTrue={foo}></RenderIf>' },
        { code: '<RenderIf isTrue={!foo}></RenderIf>' },
    ].map(parserOptionsMapper),
    invalid: [
        { code: '<RenderIf isTrue={!!foo}></RenderIf>', errors: [expectedError] },  
    ].map(parserOptionsMapper)
});    
