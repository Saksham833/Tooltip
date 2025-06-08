# Tooltip
This Tooltip component is a custom React tooltip that shows additional information when the user hovers over its child element — only if the child content is truncated (i.e., overflowing) or if explicitly asked to show unconditionally.

| Prop                      | Type              | Description                                                                    |
| ------------------------- | ----------------- | ------------------------------------------------------------------------------ |
| `delay?`                  | `number`          | Optional delay (in ms) before showing the tooltip. Defaults to `100`.          |
| `children`                | `ReactElement`    | The child element that the tooltip will wrap (e.g., `<span>`, `<div>`, etc.).  |
| `content`                 | `React.ReactNode` | The content inside the tooltip (usually text).                                 |
| `direction?`              | `string`          | Optional direction (`top`, `bottom`, `left`, `right`). Defaults to `'bottom'`. |
| `displayUnConditionally?` | `boolean`         | If `true`, tooltip shows even if the content is not overflowing.               |


example :-
<Tooltip content="Full name: Johnathan Doe" delay={150}>
  <div className="truncate-text">Johnathan D...</div>
</Tooltip>

css:- 

.truncate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

