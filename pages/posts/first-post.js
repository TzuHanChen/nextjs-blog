import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import Alert from '../../components/alert';
import utilStyles from '../../styles/utils.module.css';

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>Clsx practice</title>
			</Head>

			<h1 className={utilStyles.headingXl}>Clsx practice</h1>
			<div className={utilStyles.lightText}>
				<Date dateString={"2023-07-11"} />
			</div>
			<Alert type="success">success</Alert>
			<Alert type="error">error</Alert>
		</Layout>
	);
}