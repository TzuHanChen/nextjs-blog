import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';
import utilStyles from '../styles/utils.module.css';

function Intro() {
	return (
		<section className={utilStyles.headingMd}>
			<p>Hi, I'm TzuHan Chen. A while ago I was a front-end intern, and now my goal is to become a front-end developer.</p>
			<p>(This is a sample website - I built it with{' '}
				<Link href="https://nextjs.org/learn" target="_blank">
					Next.js tutorial</Link>.)
			</p>
			
			<p>Rendering methods abbreviations :</p>
			<ul>
				<li>Static File : SF</li>
				<li>Static Site Generation : SSG</li>
				<li>Server-side Rendering : SSR</li>
				<li>Client-side Fetching : CSF</li>
			</ul>
		</section>
	);
}

function Practice() {
	return (
		<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
			<h2 className={utilStyles.headingLg}>Practice</h2>

			<ul className={utilStyles.list}>
				<li className={utilStyles.listItem} key={"sitemap"}>
					<Link href="/sitemap.xml" target="_blank">sitemap.xml</Link>
					<br />
					<small className={utilStyles.lightText}>
						<Date dateString={"2023-07-13"} />
						{'　'}<span>SSR</span>
					</small>
				</li>

				<li className={utilStyles.listItem} key={"robots"}>
					<Link href="/robots.txt" target="_blank">robots.txt</Link>
					<br />
					<small className={utilStyles.lightText}>
						<Date dateString={"2023-07-13"} />
						{'　'}<span>SF</span>
					</small>
				</li>

				<li className={utilStyles.listItem} key={"500"}>
					<Link href="/500">500</Link>
					<br />
					<small className={utilStyles.lightText}>
						<Date dateString={"2023-07-12"} />
						{'　'}<span>SSG</span>
					</small>
				</li>

				<li className={utilStyles.listItem} key={"api-practice"}>
					<Link href="/api-practice">API Practice</Link>
					<br />
					<small className={utilStyles.lightText}>
						<Date dateString={"2023-07-12"} />
						{'　'}<span>CSF</span>
					</small>
				</li>

				<li className={utilStyles.listItem} key={"404"}>
					<Link href="/404">404</Link>
					<br />
					<small className={utilStyles.lightText}>
						<Date dateString={"2023-07-11"} />
						{'　'}<span>SSG</span>
					</small>
				</li>

				<li className={utilStyles.listItem} key={"clsx-practice"}>
					<Link href="/clsx-practice">Clsx Practice</Link>
					<br />
					<small className={utilStyles.lightText}>
						<Date dateString={"2023-07-11"} />
						{'　'}<span>SSG</span>
					</small>
				</li>
			</ul>
		</section>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData
		},
	};
}

function Blog(
	{ allPostsData }:
	{ allPostsData: { date: string, title: string, id: string }[] }) {
	return (
		<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
			<h2 className={utilStyles.headingLg}>Blog</h2>

			<ul className={utilStyles.list}>
				{allPostsData.map(({ id, date, title }) => (
					<li className={utilStyles.listItem} key={id}>
						<Link href={`/posts/${id}`}>{title}</Link>
						<br />
						<small className={utilStyles.lightText}>
							<Date dateString={date} />
							{'　'}<span>SSG</span>
						</small>
					</li>
				))}
			</ul>
		</section>
	);
}

function Source() {
	return (
		<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
			<h2 className={utilStyles.headingLg}>Source code</h2>

			<p>
				<Link href="https://github.com/TzuHanChen/nextjs-blog" target="_blank">TzuHanChen/nextjs-blog</Link>
			</p>
		</section>
	);
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<Intro />
			<Practice />
			<Blog allPostsData={allPostsData} />
			<Source />
		</Layout>
	)
}