import { google } from 'googleapis';
import GuideImage from '../../components/GuideImage';
import PageNavigationButtons from '../../components/PageNavigationButtons';
import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';

export async function getStaticProps() {
  const spreadsheetId = '1842kbUd7-BNB2azTGkqsW8s7hj8USPVzFLL9nyT-GWA';
  const client = new google.auth.JWT({
    email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    key: process.env.NEXT_PUBLIC_PRIVATE_KEY,
  });

  await client.authorize();

  const gsapi = google.sheets({ version: 'v4', auth: client });

  // fetch data from all sheets at once

  const opt = {
    spreadsheetId: spreadsheetId,
    range: 'Data-Linked Kit Parts',
  };
  const results = await gsapi.spreadsheets.values.get(opt);

  const data = results.data.values;
  return {
    props: {
      data: data,
    },
  };
}

const Page = ({ data }: any) => {
  console.log(data);
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>Intro to Arduino!</h1>
        <div className={styles.author}>
          By <a href="http://instagram.com/poofytoo">Victor Hung</a>
        </div>
        <div className={styles.learningGoals}>
          <h3>Goals of This Chapter</h3>
          <ul>
            <li>Be introduced to the notion of microcontrollers</li>
            <li>Download the Arduino code editing software</li>
          </ul>
        </div>
        <h2>What is a Microcontroller?</h2>
        <p>
          In the previous chapter, we showed a basic circuit which allows a
          light bulb to turn on. If we want to do anything like those
          Illumination lights, we'll have to learn how to turn them
          on/off/change colors/etc. programmatically. Being able to control them
          programmatically means we'll need a small computer, running some sort
          of software, to change the output values so we can vary the amount of
          power we deliver to the light.
        </p>
        <p>
          This is where a microcontroller comes in! A microcontroller is a small
          computer that has output pins that can be controlled by software (that
          you upload), and input pins that can be read and analyzed (by your
          code).
        </p>
        <GuideImage
          src="/images/guide/arduino.jpeg"
          size="SMALL"
          caption="The Arduino Uno!"
        />
        <p>
          We're going to focus on one specific flavor of the microcontroller
          called the <strong>Arduino Uno</strong>. This is an extremely popular
          microcontroller designed for beginners and experienced prototypers
          alike, and is super popular in the maker community. You can{' '}
          <a href="https://docs.arduino.cc/hardware/uno-rev3" target="_blank">
            learn more about it here!
          </a>
        </p>
        <p>
          Arduino also has a very extensive{' '}
          <a href="https://docs.arduino.cc/learn/starting-guide/getting-started-arduino">
            Getting Started guide
          </a>{' '}
          which explains a lot of the principles in detail. The guide is
          lengthy, but we recommend taking a quick look and then keeping it at
          hand for quick reference later if you have questions!
        </p>
        <GuideImage
          src="/images/guide/arduino-in-action.jpg"
          size="SMALL"
          caption="An example of an Arduino in action - wired up to a few buttons and LEDs"
        />
        <h2>Following Along</h2>
        <p>
          At this point in the learning guide, there are a couple of components
          we recommend you obtain if you'd like to follow along.
        </p>
        <div className={styles.tableContainer}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Part</th>
                <th>Sourcing Link 1</th>
                <th>Sourcing Link 2</th>
              </tr>
              {data.map((row: any) => {
                return (
                  <tr>
                    <td>{row[0]}</td>
                    <td>
                      <a href={row[2]} target="_blank">
                        {row[1]}
                      </a>
                    </td>
                    <td>
                      <a href={row[4]} target="_blank">
                        {row[3]}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </thead>
          </table>
          <p>
            *This is the standard A-B USB cable used to connect your computer to
            an Arduino. If your computer has a USB C port, we recommend getting
            something like this{' '}
            <a href="https://www.amazon.com/Cable-Matters-Printer-USB-C-Black/dp/B00VKSF39O">
              USB B to C cable
            </a>{' '}
            so you can plug your Arduino into your computer directly without the
            use of an adapter.
          </p>
          <h2>The Arduino IDE</h2>
          <p>
            We'll be using an Arduino "Integrated Development Environment"
            (IDE). An IDE is a program made for editing code files. Although
            code files are text files and could be edited in a text-editing
            program, an IDE usually includes many features that help make
            programming easier. The Arduino IDE not only lets us write and edit
            programs for the Arduino microcontrollers, it also helps us to
            upload the programs to the Arduino microcontrollers.
          </p>
          <p>
            There are two versions of the Arduino IDE: a web-based Arduino Web
            Editor and a desktop version of the Arduino IDE for Windows or Mac
            OS. We strongly recommend that you use the desktop version instead
            of the web version, since the board driver management is all
            contained within the desktop software. If you choose to use the
            web-based version, you will also need to use a separate plugin to
            manage the connection between the microcontroller and your computer.
            The plugin is sometimes a bit flaky.
          </p>
          <p>
            <a href="https://www.arduino.cc/en/software">
              Download the Arduino IDE here!
            </a>
          </p>
          <p>
            If you're looking for a bit of help downloading the IDE and getting
            started, you can take a look at{' '}
            <a
              href="https://docs.arduino.cc/software/ide-v2/tutorials/getting-started/ide-v2-downloading-and-installing"
              target="_blank"
            >
              this guide here
            </a>
            !
          </p>
          <PageNavigationButtons />
        </div>
      </div>
    </div>
  );
};

export default Page;
