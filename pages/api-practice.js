import Layout from '../components/layout';
import Head from 'next/head';
import Date from '../components/date';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
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

function Welcome() {
	const fetcher = (...args) => 
		fetch(...args)
			.then((res) => res.text());
	const { data, error, isLoading } = useSWR('/api/welcome', fetcher);

	if (error) {
		return <p>Failed to load</p>;
	}
	if (isLoading) {
		return <p>Loading...</p>;
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
			<p>With useEffect, get data from{' '}
				<Link href="/api/hello" target="_blank">/api/hello</Link>
			{' '}:</p>
			<Hello />
			<p>With SWR, get data from{' '}
				<Link href="/api/welcome" target="_blank">/api/welcome</Link>
			{' '}:</p>
			<Welcome />
		</Layout>
	);
}