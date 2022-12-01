import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>Introduction to the Illuminations App</h1>
        <h2>Desktop App</h2>
        <p>
          The software that runs the Illumination lights is an{' '}
          <a href="https://github.com/sosolimited/MIT-Illuminations">
            open source application
          </a>{' '}
          takes P5 code and visualizes/outputs it to various professional and
          hobbyist lighting units, making creating light shows easy and
          accessible.
        </p>
        <div className="boxed-note">
          <h3>Note:</h3>
          <p>
            When downloading software from the internet, it's always good to
            check twice how trustworthy the source is - in this case, both this
            website giving you this information has the domain format of{' '}
            <strong>*.mit.edu</strong>, which means it's genuine MIT content.
            GitHub is a public platform for developers to share their code -
            which means anyone can upload anything. The code we're providing you
            with is safe but be careful out there. Only download and run code
            that you trust!
          </p>
        </div>
        <p>
          Open source software like this normally have a README.md file that
          contains information about how to run the application and
          develop/contribute to it if you're so inclined. GitHub is a platform
          that makes this contribution of code easy and accessible. When you
          click the GitHub link, immediately you'll see all the source code that
          was written by the SOSO team which builds the application. We won't
          need to touch any of that in order to run the application - the code
          has been compiled into a app that can run on your computer if you have
          a Mac or a Windows computer.
        </p>
        <p>
          Head to the download page here (opens in a new window):{' '}
          <a
            target="_BLANK"
            href="https://github.com/sosolimited/MIT-Illuminations/releases"
          >
            https://github.com/sosolimited/MIT-Illuminations/releases
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;
