Contained Buttons contain actions that are primary to your app.

```jsx padded
<Button>Default</Button>
<Button size='large' type='primary'>Primary</Button>
<Button size='large' type='secondary'>Secondary</Button>
<Button type='disabled'>Disabled</Button>
<Button type='link'>Link</Button>
<Button type='text'>Text</Button>
```

Toolbar buttons can be embedded in menu bars

```jsx padded
<Button type='toolbar-primary'>Primary</Button>
<Button type='toolbar-secondary'>Secondary</Button>
```

You can also embed icons into buttons

```jsx padded
import Icon from '../Icons';
const shareIcon = <Icon type='user-add' color='white' size='25px' />;

<Button type='toolbar-primary' startIcon={shareIcon}>
  <div style={{ paddingLeft: '6px' }}>Share</div>
</Button>;
```
