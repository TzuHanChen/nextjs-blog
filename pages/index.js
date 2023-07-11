import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<section className={utilStyles.headingMd}>
				<p>Hi, I'm TzuHan Chen. A while ago I was a frontend intern, and now my goal is to become a frontend developer.</p>
				<p>
					(This is a sample website - I built it with{' '}
					<a href="https://nextjs.org/learn">Next.js tutorial</a>.)
				</p>
			</section>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				
				<ul className={utilStyles.list}>
				<li className={utilStyles.listItem} key={"first-post"}>
						<Link href="/posts/first-post">Clsx practice</Link>
						<br />
						<small className={utilStyles.lightText}>
							<Date dateString={"2023-07-11"} />
						</small>
					</li>

					<li className={utilStyles.listItem} key={"404"}>
						<Link href="/404">404</Link>
						<br />
						<small className={utilStyles.lightText}>
							<Date dateString={"2023-07-11"} />
						</small>
					</li>
				</ul>
				
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>{title}</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	)
}
