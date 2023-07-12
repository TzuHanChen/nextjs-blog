import Layout from '../components/layout';
import Head from 'next/head';
import Date from '../components/date';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function Custom500() {
	return (
		<Layout>
			<Head>
				<title>500</title>
			</Head>
			
			<h1 className={utilStyles.headingXl}>
				500 - Server-side error occurred
			</h1>
			<div className={utilStyles.lightText}>
				<Date dateString={"2023-07-12"} />
			</div>
			<br />
			<Image
				src="/images/sample.jpg"
				className={utilStyles.borderCircle}
				height={144}
				width={144}
				alt="sample"
			/>
		</Layout>
	);
}