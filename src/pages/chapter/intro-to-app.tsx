import Link from 'next/link';
import GuideImage from '../../components/GuideImage';
import PageNavigationButtons from '../../components/PageNavigationButtons';
import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>Introduction to the Illuminations App</h1>
        <div className={styles.author}>
          By <a href="https://ceriley.com/">Ceri Riley</a>, Miguel Padilla, &{' '}
          <a href="http://instagram.com/poofytoo">Victor Hung</a>
        </div>
        <div className={styles.learningGoals}>
          <h3>Goals of This Chapter</h3>
          <ul>
            <li>Download the Illuminations App</li>
            <li>Create & Edit an Illuminations Light Show</li>
          </ul>
        </div>
        <h2>Overview</h2>
        <p>
          Let's shift gears a little bit and take a look back at the lights that
          run in the MIT Welcome Center. There's a dedicated app that's built to
          run the lights, and it's available for you to play with! While you
          won't be able to directly control the live lights in the building,
          there are ways you can use the app to create your own light shows and
          share them.
        </p>
        <GuideImage
          src="/images/guide/illuminations-interior.jpg"
          size="LARGE"
        />
        <h2>Desktop Application</h2>
        <p>
          The software that runs the Illumination lights is an{' '}
          <a href="https://github.com/sosolimited/MIT-Illuminations">
            open source application
          </a>{' '}
          takes P5 code and visualizes/outputs it to various professional and
          hobbyist lighting units, making creating light shows easy and
          accessible.
        </p>
        <GuideImage
          border={false}
          size="LARGE"
          href="https://github.com/sosolimited/MIT-Illuminations"
          src="/images/guide/illuminations-splash.png"
        />
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
        <h2>Overview of the App</h2>
        <GuideImage
          border={false}
          size="LARGE"
          src="/images/guide/illuminations-home.png"
        />
        <p>
          By default, the main screen of the Illuminations app contains a
          variety of different shows, along with the current show that's playing
          (on the left, "playing now"). For starters, let's click into one of
          these shows and take a look closer at the editing panel.
        </p>
        <GuideImage
          border={false}
          size="LARGE"
          src="/images/guide/app-overview.png"
        />
        <p>
          The bulk of the screen shows the{' '}
          <a href="https://p5js.org/" target="_blank">
            p5.js
          </a>{' '}
          editor (1). That's the code running the lights! We'll go a little more
          into p5.js in the <Link href="/chapter/p5-js">p5.js chapter</Link>{' '}
          later, but one of the best ways to learn is to play around by changing
          some values here and there to see if you can alter the behavior. The
          color bar (2) is where the output of the code is rendered to and is
          the 'canvas' that's being drawn on. To get the actual color the lights
          show, the app samples colors from that canvas (3) and sends it to the
          Illumination lights.
        </p>
        <h2>How to Create/Edit a Show</h2>
        <p>
          There are a variety of different template shows that can serve as a
          base to create new shows. Click into one and then click the{' '}
          <code>COPY TO NEW SHOW</code> button at the top of the screen to
          create a new show entitles Copy of [Template name] where you can begin
          experimenting with the settings.
        </p>
        <GuideImage
          border={false}
          size="LARGE"
          src="/images/guide/copy-of-new-show.png"
        />
        <p>
          Depending on which show you copied, the <code>CONTROLS</code> section
          will give you some user-friendly interfaces to adjust variables within
          the code, like the color (inputted as RGB/HEX) or speed (via a slider
          bar) or the lights. You can change these and hit{' '}
          <code>SAVE / PREVIEW</code> if you'd like to see the updated changes,
          or hit <code>PUBLISH</code> if you'd like to set this to be the
          current playing show.
        </p>
        <p>
          The <code>CODE</code> section will give you more granular control over
          how the lights are functioning, such as if you want to adjust the
          speed beyond what a control module allows you to, connect a different
          API for data, or otherwise do cool/weird/fun things with the lights
          and light outputs.
        </p>
        <ul>
          <li>
            The code is written in p5.js, which we'll talk about in a later
            section.
          </li>
          <li>
            The text beneath the title of each control panel tells you the
            relevant code value (e.g. control.color1.value or
            controls.scanSpeed.value).
          </li>
          <li>
            Click <code>RUN</code> to check your code animation, and the{' '}
            <code>CONSOLE</code> or <code>HELP</code> buttons if you need some
            assistance debugging.
          </li>
        </ul>
        <PageNavigationButtons />
      </div>
    </div>
  );
};

export default Page;
