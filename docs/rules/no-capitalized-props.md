# Disallow capitalized props on components (rainbow/no-capitalized-props)

Enforces component prop names that start with lower case.

## Rule details

The following patterns are considered warnings:

```jsx
<Foo IsLoading={expression}></Foo>
```

```js
Foo.propTypes = {
    Bar: PropTypes.string,
}
```

The following patterns are not considered warnings:

```jsx
<Foo isLoading={expression} /></Foo>
```

```js
Foo.propTypes = {
    bar: PropTypes.string,
}
```


