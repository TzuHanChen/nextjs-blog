import Layout from '../components/layout';
import Head from 'next/head';
import Date from '../components/date';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import utilStyles from '../styles/utils.module.css';

function Hello() {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch('/api/hello')
			.then((res) => res.text())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}
	if (!data) {
		return <p>No data</p>;
	}
	return <p>{ data }</p>;
}

export default function ApiPractice() {
	return (
		<Layout>
			<Head>
				<title>API practice</title>
			</Head>

			<h1 className={utilStyles.headingXl}>API practice</h1>
			<div className={utilStyles.lightText}>
				<Date dateString={"2023-07-12"} />
				{'　'}<span>CSF</span>
			</div>
			<p>資料來源：
				<Link href="/api/hello" target="_blank">/api/hello</Link>
			</p>
			<p>使用 useEffect 取得資料：</p>
			<Hello />
		</Layout>
	);
}