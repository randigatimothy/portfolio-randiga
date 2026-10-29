import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PUBLIC_SANITY_DATASET: {
		public: true,
	},
	PUBLIC_SANITY_PROJECT_ID: {
		public: true,
	},
});
