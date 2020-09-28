# Disallow double negation on RenderIf component (rainbow/no-double-negation-renderif)

Enforces that there is no double negations on attribute `isTrue` of RenderIf component. This enhances readability of code. The casting to boolean is made inside of the RenderIf implementation.

## Rule details

The following patterns are considered warnings:

```jsx
<RenderIf isTrue={!!foo}>
   <Content>
</RenderIf>
```

The following patterns are not considered warnings:

```jsx
<RenderIf isTrue={foo}>
   <Content>
</RenderIf>
```

