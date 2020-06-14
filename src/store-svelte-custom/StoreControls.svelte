<script>
  import { count } from "./store.js";
</script>

<button on:click={count.increment}>➕</button>
<button on:click={count.decrement}>➖</button>
<button on:click={count.reset}>Reset 🔙</button>
<button on:click={() => count.set('‼️')}>Wrong Type 🙈</button>
