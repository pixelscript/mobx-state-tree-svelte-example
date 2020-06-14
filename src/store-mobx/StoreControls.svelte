<script>
import { count } from './store.js';
</script>

<button on:click={() => $count = $count.value + 1}>➕</button>
<button on:click={() => $count = $count.value - 1}>➖</button>
<button on:click={() => $count = 0}>Reset 🔙</button>
<button on:click={() => $count = '‼️'}>Wrong Type 🙈</button>