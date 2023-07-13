import Layout from '../components/layout';
import Head from 'next/head';
import Date from '../components/date';
import Link from 'next/link';
// import { useState } from 'react';
import utilStyles from '../styles/utils.module.css';

export default function ApiPractice() {
	// const [text, setText] = useState();
	// fetch('/api/hello')
	// 	.then((res) => res.text())
	// 	.then((data) => setText(data));
	// console.log(text);

	return (
		<Layout>
			<Head>
				<title>API practice</title>
			</Head>

			<h1 className={utilStyles.headingXl}>API practice</h1>
			<div className={utilStyles.lightText}>
				<Date dateString={"2023-07-12"} />
			</div>
			{/* <p>{ text }</p> */}
			<p>在本地使用 fetch 可取得{' '}
				<Link href="/api/hello" target="_blank">/api/hello</Link>
			{' '}的資料，可是部署到 Vercel 之後出現 Invalid path 錯誤</p>
		</Layout>
	);
}