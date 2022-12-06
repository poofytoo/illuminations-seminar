import GuideImage from '../../components/GuideImage';
import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';
import cx from 'classnames';

import { useState } from 'react';

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-twilight.min.css';
import PageNavigationButtons from '../../components/PageNavigationButtons';

const Page = ({ data }: any) => {
  const [code, setCode] = useState(`// MIT Illuminations 2022
// Author: Victor Hung

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(2, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(2, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);             // wait for a second
  digitalWrite(2, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);             // wait for a second
}`);

  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>LEDs & Blink!</h1>
        <div className={styles.author}>
          By <a href="http://instagram.com/poofytoo">Victor Hung</a>
        </div>
        <div className={styles.learningGoals}>
          <h3>Goals of This Chapter</h3>
          <ul>
            <li>Understand how breadboards work</li>
            <li>Obtain a basic understanding of the LED</li>
            <li>Wire up a simple circuit</li>
            <li>Use the Arduino to blink the LED</li>
          </ul>
        </div>
        <h2>Putting it together</h2>
        <p>
          In this chapter, we're going to put together a simple circuit that
          demonstrates a small sliver of the Arduino Uno's capabilities. Our
          circuit will consist of the humble Arduino Uno, some wires, a
          resistor, and a LED (a small but metaphorically powerful light
          source.) Being able to controll this LED programmatically is the next
          step for us to build our very own Illuminations lights at home!
        </p>
        <h2>The Breadboard</h2>
        <p>
          We've got a lot of components we want to assemble together; how do we
          actually connect them? Introducing: breadboards! A breadboard is a
          tool that allows you to quickly and easily wire up a circuit. A
          breadboard allows us to stick the contacts of components directly into
          it, helping us electrically connect certain components.
        </p>
        <p>
          The horizontal rows (i.e.
          <span className={styles.pin}>A1</span>,{' '}
          <span className={styles.pin}>B1</span>,
          <span className={styles.pin}>C1</span>,{' '}
          <span className={styles.pin}>D1</span> and
          <span className={styles.pin}>E1</span>) are all connected underneath.
          Note there is a middle channel that separates the two horizontal rows
          (sometimes called the <strong>trough</strong>) which separates the two
          sides (i.e. <span className={styles.pin}>A1</span>,
          <span className={styles.pin}>B1</span>,{' '}
          <span className={styles.pin}>C1</span>,
          <span className={styles.pin}>D1</span> and{' '}
          <span className={styles.pin}>E1</span> are NOT connected to{' '}
          <span className={styles.pin}>F1</span>,
          <span className={styles.pin}>G1</span>,{' '}
          <span className={styles.pin}>H1</span>,
          <span className={styles.pin}>I1</span> and{' '}
          <span className={styles.pin}>J1</span>). On both ends are your power
          rails. Typically, the red one is connected to your power source (in
          this case 5v) and the black one is connected to your ground (in this
          case 0v). There are two power rails on both sides of the breadboard,
          which are NOT connected to one another (you'll see us use a jumper to
          bridge them later.)
        </p>
        <p>
          In the image below, areas inside a purple outline are examples where
          points are connected together.
        </p>
        <GuideImage src="/images/guide/breadboard-graphic.png" size="MEDIUM" />
        <h2>The Light Emitting Diode</h2>
        <p>
          The light emitting diode is a component that emits light when an
          electric current is passed through it (much like a light bulb!)
          However, unlike light bulbs, LEDs are much more efficient (much less
          of the energy is converted into heat) and can be used to create a
          variety of different colors.
        </p>
        <GuideImage src="/images/guide/led-photo.png" size="SMALL" />
        <p>
          The LED is a type of a diode. Diodes only allow current to flow in one
          direction. As such, they have what's called a polarity: meaning, there
          is a positive side and a negative side. LEDs indicate the polarity by
          having one terminal longer than the other. The convention is to have
          the longer terminal be positive{' '}
          <span className={cx(styles.sign, styles.positive)}>+</span> and the
          shorter one be negative{' '}
          <span className={cx(styles.sign, styles.negative)}>-</span>. If you
          wire it the wrong way around, often times, nothing will happen and the
          LED will not light up when you expect it to.
        </p>
        <GuideImage
          src="/images/guide/led-graphic-polarity.png"
          size="MEDIUM"
        />
        <h2>Let's wire it up!</h2>
        <h3>Prepare the Bus Lines</h3>
        <p>
          Our first step is to set up the power bus lines. Staying with
          convention, we will use the red buses for the 5V supply and the blue
          buses for ground (0V). While not required, it's good practice to use
          red wire for the positive power supply and black wire for the ground,
          if those colors are available. We will not only connect the
          microcontroller's <span className={styles.pin}>GND</span> and
          <span className={styles.pin}>5V</span> pins to the busses, but we will
          also connect the busses on the two sides of the breadboard so that the
          busses on both sides of the board can be used.
        </p>
        <p>Wire the following:</p>
        <ul>
          <li>left-side blue bus to right-side blue bus</li>
          <li>left-side red bus to right-side red bus</li>
        </ul>
        <p>
          While we may not be using both sides of these power rails just yet for
          this exercise, it's always a good idea to have them wired up. It'll
          save some headache later if you do decide to use them, (and wonder why
          it's not working if you don't wire them up)
        </p>
        <p>
          Let's now bring in power to our breadboard by connecting the arduino's
          power (5v) and ground to the breadboard
        </p>
        <ul>
          <li>
            Connect Arduino <span className={styles.pin}>5V</span> to a point on
            the red power rail
          </li>
          <li>
            Connect Arduino <span className={styles.pin}>GND</span> (you'll see
            multiple and they all do the same) to a point on the blue ground
            rail
          </li>
        </ul>
        <GuideImage
          src={[
            '/images/guide/breadboard-power-bus.png',
            '/images/guide/breadboard-power-bus-2.png',
          ]}
        />
        <h3>Attaching the LED</h3>
        <p>
          We'll now add an LED to the breadboard. We've provided locations of
          pins as suggestions - as long as you have the right connections,
          you're good to go.
        </p>
        <p>
          Remember that LEDs have polarity, so pay special attention to which
          end goes where!
        </p>
        <ul>
          <li>
            Bring Pin 2 of the Arduino <span className={styles.pin}>PIN 2</span>{' '}
            to the board <span className={styles.pin}>J3</span>
          </li>
          <li>
            Grab the red LED. Place the longer end{' '}
            <span className={cx(styles.sign, styles.positive)}>+</span> into
            <span className={styles.pin}>H3</span> and the shorter end{' '}
            <span className={cx(styles.sign, styles.negative)}>-</span> into
            <span className={styles.pin}>H4</span>.
          </li>
          <li>
            Place a resistor on the board (220&#8486;) from
            <span className={styles.pin}>G4</span> to{' '}
            <span className={styles.pin}>E4</span>
          </li>
          <li>
            Finally, connect the resistor to ground
            <span className={styles.pin}>A4</span> to{' '}
            <span className={styles.pin}>Gnd</span>
          </li>
        </ul>
        <GuideImage src="/images/guide/breadboard-led-only.png" />
        <h2>Getting the Code Ready to Upload</h2>
        <p>
          The final step to seeing our LED blink is to upload code to the
          Arduino that will tell it to do that! Arduino has a great guide with
          regards to uploading code onto the Arduino. This is a step that
          sometimes can be a bit tricky (connection errors, etc.) so take your
          time with it and believe in yourself!
        </p>
        <p>
          Arduino calls these code files "sketches". You can read the{' '}
          <a
            href="https://support.arduino.cc/hc/en-us/articles/4733418441116-Upload-a-sketch-in-Arduino-IDE"
            target="_BLANK"
          >
            instructions here
          </a>
          !{' '}
        </p>
        <h2>Uploading the Code!</h2>
        <p>
          Now, copy and paste the code below into your Arduino IDE and hit
          upload! If you've done it successfully, you should see your LED
          blinking!
        </p>
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.js, 'javascript')}
          padding={20}
          style={{
            overflow: 'visible',
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
          }}
        />
        <p>
          Hooray! Take a look at the code and see if you understand it. Try
          modifying a couple of elements and then reuploading to see how it
          responds. Can you make it blink faster?
        </p>
        <p>
          If something doesn't work - no fret! It's all part of the learning
          process. Review the steps carefully, making sure you've wired up
          everything as intended. Even a single connection being broken may
          cause your circuit to not work!
        </p>
        <p>
          If you're getting errors in the Arduino IDE, try to read through it to
          see if there's anything decipherable to you. Those error messages are
          more helpful then people often give them credit for. There may be a
          lot of mumbo-jumbo, but usually a line or two will be in
          human-readable language that will help you resolve the issue!
        </p>
        <PageNavigationButtons />
      </div>
    </div>
  );
};

export default Page;
