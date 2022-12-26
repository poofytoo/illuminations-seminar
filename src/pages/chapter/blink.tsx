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
import Link from 'next/link';

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
        <h2>Building a Simple Circuit!</h2>
        <p>
          In this chapter, we're going to put together a simple circuit that
          demonstrates a small sliver of the Arduino Uno's capabilities. Our
          circuit will consist of the humble Arduino Uno microprocessor, some
          wires, a resistor, and a LED (a small but metaphorically powerful
          light source). Being able to control this LED programmatically is the
          next step to build your own version of the MIT Illuminations lights at
          home!
        </p>
        <h2>The Breadboard</h2>
        <p>
          We've got a lot of components we want to assemble together; how do we
          actually connect them? Introducing: <strong>breadboards</strong>! A
          breadboard is a tool that allows you to easily wire up a circuit by
          sticking the contacts of components directly into the holes, which
          we'll call <strong>points</strong>.
        </p>
        <p>
          The horizontal rows of five points (i.e.
          <span className={styles.pin}>A1</span>,{' '}
          <span className={styles.pin}>B1</span>,
          <span className={styles.pin}>C1</span>,{' '}
          <span className={styles.pin}>D1</span> and
          <span className={styles.pin}>E1</span>) are connected to each other.
          There is a middle channel (sometimes called the trough) that separates
          the two sides (i.e. <span className={styles.pin}>A1</span>,
          <span className={styles.pin}>B1</span>,{' '}
          <span className={styles.pin}>C1</span>,
          <span className={styles.pin}>D1</span> and{' '}
          <span className={styles.pin}>E1</span> are NOT connected to{' '}
          <span className={styles.pin}>F1</span>,
          <span className={styles.pin}>G1</span>,{' '}
          <span className={styles.pin}>H1</span>,
          <span className={styles.pin}>I1</span> and{' '}
          <span className={styles.pin}>J1</span>).
        </p>
        <p>
          The two-hole-wide columns next to both of the long edges of the
          breadboard are your power rails. Typically, the one next to the red
          line is connected to your power source (in this case, 5V) and the one
          next to the black or blue line is connected to your ground (in this
          case, 0V). The power rails on opposite sides of the breadboard are NOT
          connected to one another.
        </p>
        <p>
          In the image below, we're showing three examples of points that are
          connected to each other - two horizontal rows and one power rail. Note
          that each purple outline indicates one group of points.
        </p>
        <GuideImage src="/images/guide/breadboard-graphic.png" size="MEDIUM" />
        <h2>The Light Emitting Diode</h2>
        <p>
          The <strong>light emitting diode</strong>, or <strong>LED</strong>, is
          a component that emits light when an electric current is passed
          through it, much like a light bulb! However, unlike light bulbs, LEDs
          are much more efficient (much less of the energy that powers them is
          converted into heat) and can be used to create a variety of different
          colors.
        </p>
        <GuideImage src="/images/guide/led-photo.png" size="SMALL" />
        <p>
          The "Diode" part of LED means that it's a component that only allows
          current to flow in one direction. As such, LEDs have what's called a
          <strong>polarity</strong>: there is a positive{' '}
          <span className={cx(styles.sign, styles.positive)}>+</span> side and a
          negative <span className={cx(styles.sign, styles.negative)}>-</span>{' '}
          side. Like how the battery terminals were labeled in the{' '}
          <Link href="/chapter/electronics">circuit diagram in Chapter 2</Link>.
        </p>
        <p>
          LEDs have a couple indicators of their polarity. The convention is to
          have the longer terminal (also called a <strong>pin</strong> or a
          lead) and round side be positive{' '}
          <span className={cx(styles.sign, styles.positive)}>+</span>, and the
          shorter terminal and flat side be negative{' '}
          <span className={cx(styles.sign, styles.negative)}>-</span>.
          Oftentimes, if you wire it the wrong way around, the LED will not
          light up when you expect it to.
        </p>
        <GuideImage
          src="/images/guide/led-graphic-polarity.png"
          size="MEDIUM"
        />
        <h2>Let's wire it up!</h2>
        <h3>Prepare the Bus Lines</h3>
        <p>
          Our first step is to connect both power rails on the breadboard to
          each other, and then to a power source. When everything is set up, we
          call them the <strong>power bus lines</strong> or{' '}
          <strong>buses</strong> for short.
        </p>
        <p>
          Before there's any electricity involved, we want to connect the power
          rails on both sides of the breadboard. It's good practice to use red
          wire for the red power rail (which will be connected to the 5V power
          supply) and black wire for the blue power rail (which will be
          connected to ground) - if those colors are available.
        </p>
        <p>On one end of the breadboard, wire the following::</p>
        <ul>
          <li>
            With red wire, connect the left-side red power rail to the
            right-side red power rail
          </li>
          <li>
            With black wire, connect the left-side blue power rail to the
            right-side blue power rail
          </li>
        </ul>
        <p>
          We won't be using both sides of these power rails for this exercise,
          but it's always a good idea to have them wired up together. It'll save
          you some prep-work later if or when you do decide to use both sides!
        </p>
        <p>
          Next, we can connect the Arduino Uno to bring in power to our
          breadboard. Staying with convention, we will connect the red power
          rail to the arduino's 5V power supply and the black or blue power rail
          to the arduino's 0V ground.{' '}
        </p>
        <p>On one side of the breadboard, wire the following:</p>
        <ul>
          <li>
            With red wire, connect the Arduino Uno's 5V pin to a point on the
            red power rail
          </li>
          <li>
            With black wire, connect the Arduino Uno's ground pin (labeled{' '}
            <span className={styles.pin}>GND</span>; you'll see multiple and
            they all do the same thing) to a point on the blue power rail
          </li>
        </ul>
        <p>Great! Your breadboard should look something like this:</p>
        <GuideImage
          src={[
            '/images/guide/breadboard-power-bus.png',
            '/images/guide/breadboard-power-bus-2.png',
          ]}
        />
        <h3>Attaching the LED</h3>
        <p>
          Now that our breadboard has power, we'll add an LED (along with a
          resistor and a couple more wires). We've provided suggestions of which
          points to insert wires or the component pins. But as long as you make
          sure to use connected points on the breadboard, you should be good to
          go.
        </p>
        <p>
          Remember that LEDs have polarity, so pay special attention to which
          terminal goes where! You want the longer pin + to be closer to the 5V
          power, and the shorter pin - to be closer to ground.
        </p>
        <p>
          Here's how to set up your breadboard so it looks like the image below:{' '}
        </p>
        <ul>
          <li>
            Use a wire (any color will do, but it's good practice to use
            something other than red or black) to connect the Arduino Uno{' '}
            <span className={styles.pin}>PIN 2</span> to the board{' '}
            <span className={styles.pin}>J3</span>
          </li>
          <li>
            Grab the red LED. Place the longer pin{' '}
            <span className={cx(styles.sign, styles.positive)}>+</span> into
            <span className={styles.pin}>H3</span> into H3 and the shorter pin{' '}
            <span className={cx(styles.sign, styles.negative)}>-</span> into
            <span className={styles.pin}>H4</span>.
          </li>
          <li>
            Place a 220&#8486; resistor from
            <span className={styles.pin}>G4</span> to{' '}
            <span className={styles.pin}>E4</span>
          </li>
          <li>
            Use a black wire to connect
            <span className={styles.pin}>A4</span> to{' '}
            <span className={styles.pin}>Gnd</span> (the blue power bus that we
            set up earlier)
          </li>
        </ul>
        <GuideImage src="/images/guide/breadboard-led-only.png" />
        <h2>Getting the Code Ready to Upload</h2>
        <p>
          The final step is to upload code to the Arduino Uno that will tell the
          LED to blink! This is a step that sometimes can be a bit tricky
          (connection errors, etc.) so take your time with it and believe in
          yourself!
        </p>
        <p>
          Arduino calls these code files "sketches,"and they provide some great{' '}
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
          upload! If you've done everything successfully, you should see your
          LED blinking! Hooray!
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
          Take a look at the code and see if you understand what each line does.
          Try modifying a couple of elements and then reuploading to see how the
          LED responds. Can you make it blink faster?
        </p>
        <h2>Troubleshooting</h2>
        <p>
          If something doesn't work - no fret! It's all part of the learning
          process.
        </p>
        <p>
          Review the steps carefully, making sure you've wired up everything as
          intended. Even a single connection being broken may cause your circuit
          to not work!
        </p>
        <p>
          If you're getting errors in the Arduino IDE, try to read through the
          error messages. They're more helpful than people often give them
          credit for. There may be a lot of jargon, but usually a line or two
          will be in human-readable language that will help you resolve the
          issue!
        </p>
        <PageNavigationButtons />
      </div>
    </div>
  );
};

export default Page;
