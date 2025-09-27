import { writable } from 'svelte/store';

// toggle ambient audio
export const audioEnabled = writable(false);

// detect prefers-reduced-motion
export const reducedMotion = writable(
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
);

if (typeof window !== 'undefined') {
  window.matchMedia('(prefers-reduced-motion: reduce)')
    .addEventListener('change', e => {
      reducedMotion.set(e.matches);
    });
}
