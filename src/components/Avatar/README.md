Avatars are used to represent different users in dialogs and toolbars.

```jsx padded
import { Size } from '../../types';

<div style={{ display: 'flex', alignItems: 'baseline' }}>
  <Avatar color='#46BE63'>J</Avatar>
  <Avatar size={Size.LARGE} color='orange'>
    B
  </Avatar>
  <Avatar color='purple'>
    G
  </Avatar>
  <Avatar size={Size.LARGE} color='red'>
    A
  </Avatar>
</div>
```
