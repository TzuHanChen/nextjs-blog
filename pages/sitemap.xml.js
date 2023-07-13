import { getSortedPostsData } from "../lib/posts";

const DEPLOYMENT_URL = 'https://nextjs-blog-tzuhanchen.vercel.app';

function generateSiteMap(posts) {
	return `<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			<!--Manually set the URLs I know already-->
			<url>
				<loc>${ DEPLOYMENT_URL }</loc>
	  	</url>
			<url>
				<loc>${ DEPLOYMENT_URL }/sitemap.xml</loc>
	  	</url>
			<url>
				<loc>${ DEPLOYMENT_URL }/robots.txt</loc>
	  	</url>
			<url>
				<loc>${ DEPLOYMENT_URL }/500</loc>
	  	</url>
			<url>
				<loc>${ DEPLOYMENT_URL }/api-practice</loc>
	  	</url>
	  	<url>
				<loc>${ DEPLOYMENT_URL }/404</loc>
	  	</url>
			<url>
				<loc>${ DEPLOYMENT_URL }/clsx-practice</loc>
	  	</url>
	  
			<!--Dynamically set the URLs of posts-->
	  	${posts.map(({ id }) => {
				return `
					<url>
						<loc>${DEPLOYMENT_URL}/posts/${id}</loc>
					</url>
	  		`;
			})
			.join('')}
		</urlset>
	`;
}

function SiteMap() {
	// getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
	// Make an API call to gather the URLs for our site
	// const request = await fetch(DEPLOYMENT_URL);
	// const posts = await request.json();
	
	// Get all post ids
	const postIds = getSortedPostsData();

	// Generate the XML sitemap with the posts data
	const sitemap = generateSiteMap(postIds);

	res.setHeader('Content-Type', 'text/xml');
	// Send the XML to the browser
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
}

export default SiteMap;