import styles from '../../styles/Guide.module.scss';
import GuideImage from '../../components/GuideImage';
import Sidebar from '../../components/Sidebar';
import PageNavigationButtons from '../../components/PageNavigationButtons';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>The Potentiometer</h1>
        <div className={styles.author}>
          by <a href="http://instagram.com/poofytoo">Victor Hung</a>
        </div>
        <div className={styles.learningGoals}>
          <h3>Goals of This Chapter</h3>
          <ul>
            <li>Obtain a basic understanding of a potentiometer</li>
          </ul>
        </div>
        <h2>Pots!</h2>
        <p>
          A potentiometer (affectionately known as a pot) is a three-terminal
          resistor with a sliding or rotating contact that forms a voltage
          divider.
        </p>
        <GuideImage
          src="/images/guide/pot-top.jpeg"
          size="MEDIUM"
          caption={"Hello! I'm a potentiometer!"}
        />
        <p>
          Let's take a look at a diagram showing the potentiometer's pin-outs.
        </p>
        <GuideImage
          src="/images/guide/illuminations-seminar-04.png"
          size="LARGE"
        />
        <p>
          Pins 1 and 3 are the ends of the resistor. When we say a 10k&#8486;
          potentiometer, we mean that the max resistance (between 1 and 3) is
          that value. As we rotate the knob counterclockwise (with the little
          arrow indicated on the knob) closer towards 1, the point of contact of
          pin 2 shifts closer to 1, decreasing the resistance between 1 and 2
          and increasing the resistance between 2 and 3.
        </p>
        <p>
          So, if we rotate all the way counterclockwise, the resistance between
          1 and 2 is very small (close to 0) and the resistance between 2 and 3
          is close to the max value.
        </p>
        <GuideImage src="/images/guide/pot-bottom.jpeg" size="SMALL" />
        <p>
          Notice how the pins are spaced out at the bottom. This is designed to
          make it easier to go into a breadboard. When you place it in, make
          sure each wire is in it's own row, like shown:
        </p>
        <GuideImage src="/images/guide/pot-breadboard.jpeg" size="MEDIUM" />
        <p>
          Once again, just like the photoresistor, we can wire it up and try to
          measure pin 2 (<span className={styles.pin}>A0</span> on the Arduino).
          It doesn't matter if pin 1 is connected to{' '}
          <span className={styles.pin}>5V</span> or{' '}
          <span className={styles.pin}>GND</span>, as long as 3 is the other.
        </p>
        <GuideImage
          src="/images/guide/illuminations-seminar-05.png"
          size="MEDIUM"
        />
        <GuideImage src="/images/guide/pot-wiring.jpeg" size="LARGE" />
        <h2>Time for Code!</h2>
        <p>
          Open up a new sketch, and try to get the reading of{' '}
          <span className={styles.pin}>A0</span> by using the{' '}
          <code>analogRead()</code> function we used in the previous section.
          You won't need to calibrate/normalize the values this time and should
          be able to directly print it out to serial. Try turning the knob and
          watch the range change. What is the range? Does this make sense to
          you?
        </p>
        <p>
          If you need a refresher on the code, try taking the code from the{' '}
          <a href="/chapter/potentiometer">previous section</a> and modifying it
          to work with the pot.
        </p>
        <h2>And now some Lights!</h2>
        <p>
          Potentiometers have lots of different functions. Often, they're used
          to give the user fine control/adjustment of values, and have a myriad
          of different real world applications.
        </p>
        <p>
          We're going to use the potentiometer to adjust the speed of this LED
          chase effect. Play around with your code and the FastLED library to
          see if you can get the LED chase to change speed based on the
          potentiometer!
        </p>
        <GuideImage src="/images/guide/pot-speed.gif" size="LARGE" />
        <p>
          Try to see if you can reproduce this effect!
          <br />
          Stuck? You can also download the code{' '}
          <a href="/arduino/PotLights/PotLights.ino">here</a>.
        </p>
        <PageNavigationButtons />
      </div>
    </div>
  );
};

export default Page;
