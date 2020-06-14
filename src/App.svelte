<script>
  import SvelteWidget from "./store-svelte/StoreWidget.svelte";
  import MobxWidget from "./store-mobx/StoreWidget.svelte";
  import SvelteCustomWidget from "./store-svelte-custom/StoreWidget.svelte";
  import MobxCustomWidget from "./store-mobx-custom/StoreWidget.svelte";
</script>

<style>
  main {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2em;
		font-weight: 100;
		padding: 1em;
  }
	
	.grid-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr;
		gap: 1px;
		grid-template-areas: "svelte mobx svelte-custom mobx-custom";
		background: #888;
	}

	div {
		background: white;
	}

	.svelte {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 1px 1px;
		grid-template-areas: "." "." ".";
		grid-area: svelte;
	}

	.mobx {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 1px 1px;
		grid-template-areas: "." "." ".";
		grid-area: mobx;
	}

	.svelte-custom {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 1px 1px;
		grid-template-areas: "." "." ".";
		grid-area: svelte-custom;
	}

	.mobx-custom {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 1px 1px;
		grid-template-areas: "." "." ".";
		grid-area: mobx-custom;
	}
</style>

<main class="grid-container">
  <div class="svelte">
		<h1>Store: Svelte</h1>
		<SvelteWidget />
		<SvelteWidget />
	</div>
  <div class="mobx">
		<h1>Store: Mobx Tree</h1> 
		<MobxWidget />
		<MobxWidget />
	</div>
  <div class="svelte-custom">
		<h1>Store: Svelte Custom</h1>
		<SvelteCustomWidget />
		<SvelteCustomWidget />
	</div>
  <div class="mobx-custom">
		<h1>Store: Mobx Tree Custom</h1>
		<MobxCustomWidget />
		<MobxCustomWidget />
	</div>
</main>
