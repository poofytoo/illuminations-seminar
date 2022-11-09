import styles from '../styles/Guide.module.scss';
import GuideImage from '../components/GuideImage';

const Page = ({ data }: any) => {
  return (
    <div className={styles.guideContent}>
      <h1>The Potentiometer</h1>
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
        The easiest way to understand a potentiometer is by looking at a diagram
        with it's pinouts.
      </p>
      <GuideImage
        src="/images/guide/illuminations-seminar-04.png"
        size="LARGE"
      />
      <p>
        1 and 3 of the contacts are the ends of the resistor. When we say a
        10k&#8486; potentiometer, we mean that the max resistance (between 1 and
        3) is that value. As we rotate the knob counterclockwise (with the
        little arrow indicated on the knob) closer towards 1, the point of
        contact of the second contact shifts closer to 1, decreasing the
        resistance between 1 and 2 and increasing the resistance between 2 and
        3.
      </p>
      <p>
        So, if we rotate all the way counterclockwise, the resistance between 1
        and 2 is very small (close to 0) and the resistance between 2 and 3 is
        close to the max value.
      </p>
      <GuideImage src="/images/guide/pot-bottom.jpeg" size="SMALL" />
      <p>
        Notice how the contacts are spaced out at the bottom. This is designed
        to make it easier to go into a breadboard. When you place it in, make
        sure each wire is in it's own row, like shown:
      </p>
      <GuideImage src="/images/guide/pot-breadboard.jpeg" size="MEDIUM" />
      <p>
        Once again, just like the photoresistor, we can wire it up and try to
        measure contact 2 (A0 on the Arduino). It doesn't matter if contact 1 is
        connected to 5V or Ground, as long as 3 is the other.
      </p>
      <GuideImage
        src="/images/guide/illuminations-seminar-05.png"
        size="MEDIUM"
      />
      <GuideImage src="/images/guide/pot-wiring.jpeg" size="LARGE" />
      <h2>Time for Code!</h2>
      <p>
        Open up a new sketch, and try to get the reading of A0 by using the{' '}
        <code>analogRead()</code> function we used in the previous section. You
        won't need to calibrate/normalize the values this time and should be
        able to directly print it out to serial. Try turning the knob and watch
        the range change. What is the range? Does this make sense to you?
      </p>
      <p>
        If you need a refresher on the code, try taking the code from the{' '}
        <a href="/8-analog-in">previous section</a> and modifying it to work
        with the pot.
      </p>
      <h2>And now some Lights!</h2>
      <p>
        Potentiometers have lots of different functions. Often, they're used to
        give the user fine control/adjustment of values, and have a myriad of
        different real world applications.
      </p>
      <p>
        We're going to use the potentiometer to adjust the speed of this LED
        chase effect. Play around with your code and the FastLED library to see
        if you can get the LED chase to change speed based on the potentiometer!
      </p>
      <GuideImage src="/images/guide/pot-speed.gif" size="LARGE" />
      <div className={styles.navigation}>
        <a href="/8-analog-in" className={styles.previous}>
          Back to Photoresistors!
        </a>
        <a />
      </div>
    </div>
  );
};

export default Page;
