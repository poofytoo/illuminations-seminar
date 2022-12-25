import GuideImage from '../../components/GuideImage';
import PageNavigationButtons from '../../components/PageNavigationButtons';
import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>Basics of Electronics</h1>
        <div className={styles.author}>
          By <a href="http://instagram.com/poofytoo">Victor Hung</a>
        </div>
        <div className={styles.learningGoals}>
          <h3>Goals of This Chapter</h3>
          <ul>
            <li>Obtain a basic understanding of electricity and circuits</li>
          </ul>
        </div>
        <h2>An Introductory Spark</h2>
        <p>
          MIT Illuminations is just a series of lights coordinated through a
          computer to turn on at specific colors at specific times. To explain
          how these lights work, we first have to understand the basics of
          electricity.
        </p>
        <p>
          There are two types of electricity:{' '}
          <strong>alternating current (AC)</strong> and{' '}
          <strong>direct current (DC)</strong>. If you're in the United States
          (and most countries) the electricity you use whenever you plug in a
          device to an outlet is AC. When you power a device with a battery,
          that's a small, safe, and manageable amount of DC.
        </p>
        <p>For this learning guide, we'll be using DC!</p>
        <GuideImage
          src="/images/guide/battery-bulb-circuit.png"
          size="MEDIUM"
        />
        <p>
          Above you can see a diagram of a simple DC circuit - the electricity
          is coming from the battery and powering a light bulb. The battery, in
          this case, is our <strong>power source</strong>, and the light bulb is
          our <strong>load</strong>.
        </p>
        <p>
          The black lines represent <strong>wires</strong>. You can see that the
          top black line - or wire - goes from the positive terminal of the
          battery to the bulb. And the bottom black line - or wire - goes from
          the bulb back to the negative terminal of the battery.
        </p>
        <p>
          Electricity flows in a loop (in the direction of the arrows shown)
          from the power source to the load and then back. Because this circuit
          is a complete, unbroken loop, we call it a{' '}
          <strong>closed circuit</strong>.
        </p>
        <p>
          If there is a break in the loop, the circuit is incomplete and no
          electricity will flow. We call that an <strong>open circuit</strong>.
          You can think of a circuit as a conveyor belt for electricity - the
          whole loop has to be connected and intact, otherwise it won't work
          properly.
        </p>
        <p>
          Note that the direction of the arrows in our circuit diagram shows the
          <strong>conventional current</strong>, which assumes that power flows
          from the positive battery terminal to the negative battery terminal.
          The reverse direction is called <strong>electron current</strong>,
          which is a more realistic model of the actual flow of electrons. But,
          for the sake of this project, we don't need to get deep into the
          physics of electricity.
        </p>
        <h2>We have a light!</h2>
        <p>
          If you were to build a circuit based on the diagram above, you would
          see the light turn on! And there are a couple of{' '}
          <strong>parameters</strong> that you can adjust when you build any
          circuit. For this project, the things we care about the most are
          <strong>voltage</strong> and <strong>amperage</strong>.
        </p>
        <h3>Voltage</h3>
        <p>
          Voltage is the difference in electric potential between two points in
          a circuit. A higher voltage means there's more energy in the circuit.
          The units for voltage are <strong>Volts</strong> (with the symbol{' '}
          <strong>V</strong>).
        </p>
        <p>
          Because electricity can be tricky to visualize, let's use a water
          analogy. Think of voltage as the pressure of water in a pipe. Higher
          water pressure means that water can flow through the pipe faster. But
          the size of the pipe stays the same!
        </p>
        <GuideImage
          src="/images/guide/guide-graphics_voltage.png"
          size="MEDIUM"
        />
        <h3>Amperage</h3>
        <p>
          Amperage is the amount of current flowing through a circuit. A higher
          amperage means there's more electrons flowing through the circuit. The
          units for amperage are <strong>Amperes</strong> (shortened as{' '}
          <strong>amps</strong>, with the symbol <strong>A</strong>).
        </p>
        <p>
          Using the same water analogy, think of amperage as the size of the
          pipe. A larger diameter means that more water can flow through it at
          once. It's important to note here that you can have a very large
          diameter pipe with very still water, which is the same as having a
          high amperage but low voltage.
        </p>
        <GuideImage
          src="/images/guide/guide-graphics_amperage.png"
          size="MEDIUM"
        />
        <p>
          Understanding these basic units of electricity can help you start
          building intuition for electric circuits. We won't be going into the
          math in this guide, but we recommend extra reading, such as{' '}
          <a
            href="https://science.howstuffworks.com/environmental/energy/question501.htm"
            target="_BLANK"
          >
            this article
          </a>
          , if you're interested in learning more about these parameters and
          their relationships.
        </p>
        <PageNavigationButtons />
      </div>
    </div>
  );
};

export default Page;
