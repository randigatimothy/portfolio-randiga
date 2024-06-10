import { QueryClient } from '@sveltestack/svelte-query';

// Create a client
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			refetchOnReconnect: 'always',
		},
	},
});
