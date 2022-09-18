import type { NextPage } from 'next';
import { google } from 'googleapis';
import Link from 'next/link';

import styles from '../styles/Home.module.scss';
import GoogleParser from '../components/GoogleParser';

export async function getStaticProps() {
  const documentId = '1S2gIcxddk0iilI6K54nibhUT5H8SeIaD9JIrEwQJiSs';
  const client = new google.auth.JWT({
    email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    scopes: ['https://www.googleapis.com/auth/documents'],
    key: process.env.NEXT_PUBLIC_PRIVATE_KEY,
  });

  console.log(process.env.PRIVATE_KEY);

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

const Home: NextPage = ({ data }: any) => {
  return (
    <>
      <div className={styles.centerContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.circleContainer}>
            <div className={styles.circle} />
          </div>
          <div className={styles.textContent}>
            <h1>
              <strong>6.A01 · ILLUMINATIONS</strong> SEMINAR
            </h1>
            <p className={'dem'}>
              contact:{' '}
              <a href="mailto:illuminations-staff@mit.edu">
                illuminations-staff@mit.edu
              </a>
            </p>
            <p>
              Hello! The Fall 2022 MIT Illuminations Seminar is a first-year,
              3-unit seminar designed to introduce students to the basics of
              electronics and lighting through hands-on experimentation and
              integration with the context of a dynamic light installation at
              the MIT Welcome Center called{' '}
              <a href="https://illuminations.mit.edu">MIT Illuminations</a>.
            </p>
            <p>
              During the semester, this website will contain information
              relevant to the class, including lecture notes & additional
              resources. As the semester wraps up, items here will be archived
              as open-source learning material for those who wish to contribute
              to the MIT Welcome Center!
            </p>
            <p>
              <span className={'dem'}>Course Instructor:</span> Chris Peterson{' '}
              <a href="mailto:petey@mit.edu">petey@mit.edu</a>
              <br />
              <span className={'dem'}>Lecturer:</span> Victor Hung{' '}
              <a href="mailto:vhung@mit.edu">vhung@mit.edu</a>
            </p>
            <h2>Office Hours</h2>
            <GoogleParser rawData={data} />
            <h2 className="blue">Lecture Notes</h2>
            <ul>
              <Link href="/slides/slides1.pdf">
                <li>Hello and Welcome!</li>
              </Link>
              <Link href="/slides/slides2.pdf">
                <li>Electronics 101</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
