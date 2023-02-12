import Link from 'next/link';
// import GuideImage from '../../components/GuideImage';
import Sidebar from '../../components/Sidebar';

import { google } from 'googleapis';
import styles from '../../styles/Guide.module.scss';
import GoogleParser from '../../components/GoogleParser';

export async function getStaticProps() {
  const documentId = '12Ygv2E2qYYpMy4jysbUUH42IdXkwcLjsvNrBEsDTZ0k';
  const client = new google.auth.JWT({
    email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    scopes: ['https://www.googleapis.com/auth/documents'],
    key: process.env.NEXT_PUBLIC_PRIVATE_KEY,
  });

  await client.authorize();

  const gsapi = google.docs({ version: 'v1', auth: client });
  const opt = {
    documentId,
  };

  const data = await gsapi.documents.get(opt);

  return {
    props: {
      data: data.data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5, // In seconds
  };
}

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <GoogleParser rawData={data} />
        <p></p>
      </div>
    </div>
  );
};

export default Page;
