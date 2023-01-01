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
        <h1>Introduction to the MIT Illuminations App</h1>
        <div className={styles.author}>
          By <a href="https://ceriley.com/">Ceri Riley</a>, Miguel Padilla, &{' '}
          <a href="http://instagram.com/poofytoo">Victor Hung</a>
        </div>
        <div className={styles.learningGoals}>
          <h3>Goals of This Chapter</h3>
          <ul>
            <li>Download the MIT Illuminations App</li>
            <li>Create & Edit an MIT Illuminations Light Show</li>
          </ul>
        </div>
        <h2>How do the MIT Welcome Center lights work?</h2>
        <p>
          MIT Illuminations has a dedicated app that's built to design and run
          the lights, and it's available for you to play with! While you won't
          be able to directly control the live lights in MIT Welcome Center
          (unless you work directly with the Admissions office), you can use the
          app to create your own light shows at home and share them.
        </p>
        <GuideImage
          src="/images/guide/illuminations-interior.jpg"
          size="LARGE"
          caption="Come to building E38 on campus to see the MIT Welcome Center lights in action!"
        />
        <h2>Desktop Application</h2>
        <p>
          The software that runs the MIT Illumination lights is an{' '}
          <a
            href="https://github.com/sosolimited/MIT-Illuminations"
            target="_blank"
          >
            open-source application
          </a>{' '}
          that takes p5.js code (an open-source JavaScript library - we have{' '}
          <Link href="/chapter/p5-js">a whole chapter</Link> on it in this
          guide!) and outputs visualizations to various professional and
          hobbyist lighting units. Basically, it makes creating fun light shows
          easy and accessible.
        </p>
        <GuideImage
          border={false}
          size="LARGE"
          href="https://github.com/sosolimited/MIT-Illuminations"
          src="/images/guide/illuminations-splash.png"
          caption="This is the splash screen of the MIT Illuminations app, and clicking this image will bring you to the open-source code repository!"
        />
        <div className="boxed-note">
          <h3>Note:</h3>
          <p>
            When downloading software from the internet, it's always good to
            double-check how trustworthy the source is. In this case, this
            website has the domain format of *.mit.edu, which means it's genuine
            MIT content. GitHub is a public platform for developers to share
            their code, which means anyone can upload anything. The
            MIT-Illuminations code we're linking to was uploaded by the{' '}
            <a href="https://www.sosolimited.com/" target="_blank">
              SOSO
            </a>
            team (an alumni-founded company who collaborated with MIT on this
            project) and we promise it's safe. Be careful out there, and only
            download and run code that you trust!
          </p>
        </div>
        <p>
          Open-source software like this normally has a README.md file that
          contains information about how to run the application and contribute
          to it if you want. Think of this guide, learn.illuminations, as an
          expanded or alternate version of the README file that goes into a
          little more detail to help you set up your own light show.
        </p>
        <p>
          We won't need to touch any of the source code in GitHub, because the
          code has been compiled into the MIT Illuminations app, which can run
          on a Mac or a Windows computer.
        </p>
        <p>
          <a
            target="_BLANK"
            href="https://github.com/sosolimited/MIT-Illuminations/releases"
          >
            You can download the app here.
          </a>
        </p>
        <h2>Overview of the App</h2>
        <GuideImage
          border={false}
          size="LARGE"
          src="/images/guide/illuminations-home.png"
        />
        <p>
          By default, the main screen of the MIT Illuminations app contains a
          variety of different light shows, along with the current show that's
          playing (on the left, labeled "Playing now"). For starters, let's
          click into one of these shows and take a look closer at the editing
          panel.
        </p>
        <GuideImage
          border={false}
          size="LARGE"
          src="/images/guide/app-overview.png"
        />
        <p>
          The bulk of the screen is the{' '}
          <a href="https://p5js.org/" target="_blank">
            p5.js
          </a>{' '}
          editor (1). That's the code running the light show! We have a whole{' '}
          <Link href="/chapter/p5-js">p5.js chapter</Link> later in this guide,
          but one of the best ways to learn is to play around, changing some
          values here and there to see if you can alter the lights' behavior.
        </p>
        <p>
          The color bar (2) is where the output of the code is rendered. Think
          of it as the 'canvas' that's being drawn on according to the code's
          instructions. Then, the app samples colors from the pixels of that
          canvas (3) and sends the output data to whatever LED lights are wired
          up to the computer.
        </p>
        <h2>How to Create & Edit a Show</h2>
        <p>
          The MIT Illuminations app contains a variety of different template
          shows (with their own partially unique code) that can serve as a base
          to create new shows. Click into one of these templates and then click
          the <code>COPY TO NEW SHOW</code> button at the top of the screen to
          create a new show entitled Copy of [template name]. From there, you
          can retitle it and begin experimenting with the settings to make your
          own light show.
        </p>
        <GuideImage
          border={false}
          size="LARGE"
          src="/images/guide/copy-of-new-show.png"
        />
        <p>
          Depending on which show you copied, the <code>CONTROLS</code> section
          will give you some user-friendly interfaces to adjust variables within
          the code, like the color (inputted as RGB/HEX) or speed (inputted via
          a slider bar) of the lights. You can change these and click{' '}
          <code>SAVE / PREVIEW</code> if you'd like to see the updated changes
          on the 'canvas' at the top of the screen, or hit <code>PUBLISH</code>{' '}
          if you'd like to set this to be the current playing show on whatever
          lights you have connected.
        </p>
        <p>
          The <code>CODE</code> section will give you more granular control over
          how the lights are functioning, such as if you want to adjust the
          speed beyond what a control module allows you to, connect a different
          API for data, or otherwise do cool/weird/fun things with the lights
          and light outputs.
        </p>
        <ul>
          <li>As we've mentioned, all this code is written in p5.js.</li>
          <li>
            The text beneath the title of each user-friendly interface in the{' '}
            <code>CONTROLS</code> section tells you the relevant value that you
            can look for in the <code>CODE</code> section (e.g.
            <code>control.color1.value</code> or{' '}
            <code>controls.scanSpeed.value</code>).
          </li>
          <li>
            Click <code>RUN</code> to check your code animation, and click the{' '}
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
