# API Guidelines
This document is still a work in progress and will be constantly updated.

## Mandatory Props for Components
All Vibe components must include the following mandatory props: `className`, `id`, and `data-testid`. These props are essential for proper component functionality and testing.
To ensure consistency and ease of use, there is no need to manually add these props to the component props interface. Instead, you can simply extend the `VibeComponentProps` interface, as demonstrated in the following example:

```tsx
import { VibeComponentProps } from "../../types";

interface MyComponentProps extends VibeComponentProps {
    // additional props specific to MyComponent
    ...
}
```

By extending `VibeComponentProps`, you automatically inherit the required props (`className`, `id`, and `data-testid`) without the need to explicitly define them in your component's props interface.

### className
Every component supports the `className` prop, which allows developers to add a custom class name to the outermost wrapper element. This feature is useful for layout and positioning purposes without overriding the component's inner styles.

### id
Each component supports the `id` prop, which provides the ability to set a unique identifier for the component.

### data-testid
When testing the application code that uses vibe components, it is necessary to retrieve elements. for that, `data-testid`s are used (TODO - add a link to a guide about how to test).

Each component in the library should exposes a `data-testid` which is set on the root element of the component.
In case a `data-testid` was not provided, the library will provide a default one, here's an example:

```tsx
const SomeComponent = () => {
  return ( 
    <div data-testid={`${props['data-testid']} || getTestId(ComponentDefaultTestId.SomeComponent, id)`}/>
      ...
    </div>
  );
}
```

Inner parts of the component would also get a data-testid, which its parent component would usually prefix with its own name. for example:
```tsx
const SomeComponent = () => {
  return ( 
    <div data-testid={`${props['data-testid']} || getTestId(ComponentDefaultTestId.SomeComponent, id)`} />
      <InnerComponent data-testid={`${props['data-testid']-inner-component`}>
    </div>
  );
}
```

## Props Conventions
Our props conventions are as follows:

1. **Boolean Props**: We do not prefix boolean props with "is" to ensure more readable shorthand boolean prop usage. For example, instead of `<Button isDisabled={true} />`, you can simply use `<Button disabled />`.

2. **Enum Props**: Use TypeScript enum types for props with fixed value lists. It is important to note that each enum key should have a string value written in kebab case format, as in the following example:
```typescript
export enum ButtonType {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary"
}
```

3. **Child Component Prop**: If a component only accepts a string as a child component, we avoid using the `children` prop. Instead, use a separate prop called `text`.

4. **Icon Support**: For components supporting a single icon, use the `icon` prop. In cases where there are two icons, such as one at the beginning and another at the end, use `startIcon` and `endIcon`. If multiple icons are supported, each icon has its own prop with a short name describing its purpose, like `searchIcon`. All icon props have a type of `SubIcon`.

Here's an example of implementing the `Avatar` component with an optional `icon` prop:

```typescript
import { SubIcon, VibeComponentProps } from "../../types";

export interface AvatarProps extends VibeComponentProps {
    icon?: SubIcon;
}
```

## Common Props 
| Prop name  | Prop meaning                                                                                                                                                   | Prop type                              | Examples                      |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|-------------------------------|
| ariaLabel  | The textual representation of a graphic asset                                                                                                                  | string                                 | Icon, IconButton              |
| disabled   | Clickable component which is not currently interactive or clickable                                                                                            | boolean                                | Button, IconButton, Clickable |
| icon       | SVG component which should displayed inside vibe's Icon component                                                                                              | SubIcon                                | Icon, IconButton              |
| size       | When a component supports multiple suitable sizes, it should include a "size" prop that allows developers to define which size variant of the component to use | Sizes / BaseSizes Enums from `sizes.ts` | Button, Combobox, Menu        |
| type       | A component with several suitable visually different variants should include a "type" prop for distinguish between them                                        | TS Enum                                | AttentionBox                  |
