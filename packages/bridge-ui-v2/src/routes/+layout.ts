/**
 * Entry point
 */

import { startWatching } from '$libs/wagmi';

// When setting this to false your entire app will only be rendered on the client,
// which essentially means you turn your app into an SPA.
// See https://kit.svelte.dev/docs/page-options#ssr
export const ssr = false;

// Start watching for network and account changes
startWatching();
