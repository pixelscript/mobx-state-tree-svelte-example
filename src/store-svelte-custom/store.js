import { writable } from 'svelte/store';

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
    subscribe,
    set,
		increment: () => update(n => n + 1),
    decrement: () => update(n => n - 1),
    reset: () => set(0)
	};
}

export const count = createCount();