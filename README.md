# MobX-state-tree: Svelte Example

Here is an example for using Mobx Tree in Svelte. It fulfills the store contract so you can use the `$` prefix.

```js
//store.js
import { types, onSnapshot } from 'mobx-state-tree';

const Count = types
  .model('Count', {
    value: 0
  })
  .actions(self => ({
    set: val => self.value = val,
    increment: () => self.value += 1,
    decrement: () => self.value -= 1,
    reset: () => self.value = 0
  }));

const count = Count.create({value: 0});
count.subscribe = method =>{
  method(count);
  return onSnapshot(count, method);
}
export { count };
```

```html
<!--StoreControls.svelte-->
<script>
  import { count } from "./store.js";
</script>

<button on:click={count.increment}>➕</button>
<button on:click={count.decrement}>➖</button>
<button on:click={count.reset}>Reset 🔙</button>
<button on:click={() => count.set({ value: '‼️' })}>Wrong Type 🙈</button>
```

```html
<!--StoreView.svelte-->
<script>
  import { count } from "./store.js";
</script>

<h1>{$count.value}</h1> 

```

## Running example

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.