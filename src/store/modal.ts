import { writable } from 'svelte/store';

export const overlay = writable(false);
export const userModal = writable(false);
export const overlayClose = writable(false);
