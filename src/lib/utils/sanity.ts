import { createClient } from '@sanity/client';
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';

export const sanityClient = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	apiVersion: '2024-06-11',
	useCdn: true,
});

export async function getBlogPosts() {
	return await sanityClient.fetch(`
*[_type == "blog_post"] | order(publishedAt) {
  title, description, slug, publishedAt, tags,
  "coverImage" : coverImage.asset->url
}`);
}

export async function getBlogPost(postSlug: string) {
	return await sanityClient.fetch(`
*[_type == "blog_post" && slug.current == "${postSlug}"][0] {
  title, body, publishedAt, tags,
  "coverImage": coverImage.asset->url, 
}
`);
}
