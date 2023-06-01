The logo comes in three forms: icon, text, and full logomark.

```jsx padded
<div style={{ display: 'flex', alignItems: 'baseline' }}>
  <div style={{ paddingRight: '10px' }}>
    <Icons />
  </div>
  <div style={{ paddingRight: '10px' }}>
    <Icons type='folder' color='blue' />
  </div>
  <div style={{ paddingRight: '10px' }}>
    <Icons type='comment' color='red' />
  </div>
  <div style={{ paddingRight: '10px' }}>
    <Icons type='search' color='bluegray' />
  </div>
  <Icons type='message' color='green' />
</div>
```
