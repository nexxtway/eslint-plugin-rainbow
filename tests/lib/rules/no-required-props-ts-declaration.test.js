const RuleTester =  require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-required-props-ts-declaration');

const ruleTester = new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {},
    },
});

const expectedError = {
    message: 'Do not use required props on public interface inheriting from BaseProps',
    type: 'TSPropertySignature',
};

ruleTester.run('no-required-props-ts-declaration', rule, {
    valid: [
        `export interface Foo extends BaseProps { 
                id?: string;
                children?: ReactNode;
                multiple?: boolean;
                onToggleSection?: (event: MouseEvent<HTMLElement>, name: Names) => void;
                activeSectionNames?: Names; 
        }`,
    ],
    invalid: [
        { code: `export interface Foo extends BaseProps { 
            id: string;
        }`, errors: [expectedError] }
    ]
});    
