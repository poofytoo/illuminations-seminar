import GuideImage from '../../components/GuideImage';
import PageNavigationButtons from '../../components/PageNavigationButtons';
import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>Illuminations & Arduino</h1>
        <div className={styles.author}>
          by <a href="http://instagram.com/poofytoo">Victor Hung</a>
        </div>
        <div className={styles.learningGoals}>
          <h3>Goals of This Chapter</h3>
          <ul>
            <li>Wire up your Arduino LEDs to the Illluminations App</li>
          </ul>
        </div>
        <h2>Overview</h2>
        <p>
          If you've been playing around with the Illuminations app, you'll
          notice that there are some pretty nifty things you can do with P5.js.
          One thing that's possible to do with the Illuminations app is to
          directly send what you program on that app and use your Arduino +
          WS2812b setup to display it.
        </p>
        <p>
          The instructions here mirror the{' '}
          <a href="https://github.com/sosolimited/MIT-Illuminations">
            Getting Started Guide
          </a>{' '}
          on the Illumination's GitHub readme, with a couple of minor
          exceptions.
        </p>
        <h2>Hardware Setup</h2>
        <p>
          The setup of the Arduino and the WS2812b strips is very easy. There
          are 3 wires from the light strip that needs to go into the Arduino.
          Double check to make sure:
        </p>
        <ul>
          <li>LED Strip Power 5V - Arduino 5V</li>
          <li>LED Strip Data (DI) - Arduino Digital Pin 4</li>
          <li>LED Strip Ground - Arduino Ground</li>
        </ul>
        <h2>Arduino Configuration</h2>
        <p>
          We'll be controlling the lights using the Illuminations App, so
          there's a bit of code that's needed on the Arduino such that
          Illuminations app can send data to the Arduino which can then in turn
          control the lights.
        </p>
        <p>
          Open the Arduino IDE and copy the code from{' '}
          <a
            href="https://github.com/sosolimited/MIT-Illuminations/blob/master/arduino/illuminations.ino"
            target="_blank"
          >
            this link
          </a>{' '}
          into a brand new blank sketch.
        </p>
        <p>
          In the sketch, set <code>LED_COUNT</code> to the number of LEDs in
          your stand (you may want to limit it to something like 25 if you have
          a long strand). <code>N_COLORS</code> should be <code>3</code> for 3
          RGB units.
        </p>
        <p>
          Make sure you have your Arduino Uno selected within the IDE, and hit
          "Upload". This publishes the code to your Arduino. After, you can
          close the IDE, and your Arduino will remember and run this code
          everytime it powers on, meaning it will always be ready to accept data
          from the Illuminations app, as long as it's plugged in via USB.
        </p>
        <h2>Setup on the Illuminations App</h2>
        <ol>
          <li>Open the MIT Illuminations application.</li>
          <li>Click on "Settings", on the "General" tab.</li>
          <li>
            Set the number of lights and RGB value to match your LED strip (in
            our case, 25 lights in RGB).
          </li>
          <li>
            Click on the "Arduino/Serial" tab, and turn on "Enable Serial Port
            Output". Select your Arduino port from the list below. On Windows
            it'll start with COM..., while on Mac expect something like
            /dev/tty....
          </li>
          <li>
            You'll know if your Arduino is receiving data correctly, as a data
            light will flicker constantly on the board so long as the
            Illuminations application is running.
          </li>
        </ol>
        <h2>Run Some Shows!</h2>
        <p>
          If everything worked, at this point your LED Strip should be lighting
          up and matching the preview shown in the application. You can start by
          editing some of the templates, or go wild and create your own. Have
          fun programming!
        </p>
        <PageNavigationButtons />
      </div>
    </div>
  );
};

export default Page;
