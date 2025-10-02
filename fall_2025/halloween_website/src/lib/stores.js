// Import the writable store function from Svelte
import { writable } from 'svelte/store';

// Create a writable store to toggle ambient audio (default: off)
export const audioEnabled = writable(false);

// Create a writable store to detect if user prefers reduced motion
export const reducedMotion = writable(
  // Check if running in browser and if prefers-reduced-motion is enabled
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
);

// If running in the browser, listen for changes to prefers-reduced-motion
if (typeof window !== 'undefined') {
  window.matchMedia('(prefers-reduced-motion: reduce)')
    // Update the store whenever the user changes their motion preference
    .addEventListener('change', e => {
      reducedMotion.set(e.matches);
    });
}
