<script>
import StoreView from './StoreView.svelte'
import StoreControls from './StoreControls.svelte'
</script>

<style>
  div {
    border: 1px solid #888;
    margin: 1em;
    padding: 1em;
  }
</style>

<div>
  <StoreControls />
  <StoreView />
</div>