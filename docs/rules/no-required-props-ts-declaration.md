# Disallow required props in ts declaration files (rainbow/no-required-props-ts-declaration)

Enforces optional props on public interfaces used for components props. Components shouldn't have required props, they should fallback to default values.

## Rule details

The following patterns are considered warnings:

```ts
export interface Foo extends BaseProps { 
    id?: string;
    children: ReactNode; // this is a required prop
    multiple?: boolean;
    onToggleSection?: (event: MouseEvent<HTMLElement>, name: Names) => void;
    activeSectionNames?: Names; 
} 
```

The following patterns are not considered warnings:

```ts
export interface Foo extends BaseProps { 
    id?: string;
    children?: ReactNode;
    multiple?: boolean;
    onToggleSection?: (event: MouseEvent<HTMLElement>, name: Names) => void;
    activeSectionNames?: Names; 
} 
```

## Usage: 

This rule requires `@typescript-eslint/parser` as parser in the eslint configuration.

