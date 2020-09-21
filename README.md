# eslint-plugin-rainbow

Static AST checker for React Rainbow Components projects

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ yarn add -D eslint
```

Next, install `eslint-plugin-rainbow`:

```
$ yarn add -D eslint-plugin-rainbow
```


## Usage

Add `rainbow` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "rainbow"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "rainbow/no-double-negation-renderif": 2
    }
}
```

## Supported Rules

* no-double-negation-renderif





