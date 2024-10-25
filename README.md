# Cute Emojies Modal

A fun and customizable modal package for React, letting you easily add emoji-based confirmation dialogs to your app!

Check out the [live demo](https://codesandbox.io/p/sandbox/cute-emojites-modal-example-l6m32v) of the modal in action.

## Installation

You can install the package via **yarn** or **npm**:

```bash
yarn add cute-emojies-modal
```

or 

```bash
npm install cute-emojies-modal
```

## Usage
### Step 1: Add the CSS
To use the styles provided by the package, import the CSS file in your index.ts (or index.js):
```typescript
import 'cute-emojies-modal/dist/index.css';
```

### Step 2: Add the Modals Container
To enable modals, ensure you add the CuteEmojiesConfirmContainer component to the app root. This is usually done in your main index.tsx file:

```typescript
import { CuteEmojiesConfirmContainer } from 'cute-emojies-modal';

...

root.render(
  <React.StrictMode>
    <App />
    <CuteEmojiesConfirmContainer /> // add this line
  </React.StrictMode>
);
```

### Step 3: Use the Modal in Your Components
Now you can easily trigger modals in your components using the useCuteModal hook:

```typescript
import { useCuteModal } from 'cute-emojies-modal';

function App() {
  const modal = useCuteModal();

  const onShowClick = async () => {
    await modal({
      title: 'Lovely',
      body: 'Woho! Now you have 3 new badges!',
      variant: 'yellow',
      emoji: 2,
    });
  };

  return (
    <div>
      <button onClick={onShowClick}>Show Modal</button>
    </div>
  );
}

export default App;

```

## Available Variants
The variant property controls the color scheme of the modal. You can choose from the following options:

- 'mint-green'
- 'orange'
- 'light-purple'
- 'purple'
- 'light-blue'
- 'yellow'

## Available Emojis
The emoji property allows you to choose which emoji to display in the modal. You can select a number between **1** and **10**.