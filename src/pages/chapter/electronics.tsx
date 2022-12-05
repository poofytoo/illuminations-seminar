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
          Illuminations, in reality, is just a series of lights coordinated
          through a computer to turn on and at specific colors at specific
          times. To understand this, let's start from the beginning, starting
          with how how a basic circuit works.
        </p>
        <p>
          There are two types of electricity: direct current (DC) and
          alternating current (AC). If you're in the United States (and most
          countries) the electricity you use in your home, whenever you plug in
          a device to an outlet or the electricity you see on the power lines
          outside - that is AC.
        </p>
        <p>
          For this learning guide, we'll be using DC (at a small, safe, and
          manageable amount.) Let's look at a DC circuit to start.
        </p>
        <GuideImage
          src="/images/guide/battery-bulb-circuit.png"
          size="MEDIUM"
        />
        <p>
          Above you can see a diagram of a simple circuit. The black lines
          represent wires, and in this case, there is a black line (the top one)
          going from the battery (the positive terminal) to the bulb, and then
          from the bulb back to the negative terminal of the battery.
        </p>
        <p>
          This forms a closed circuit, the basis behind all circuits.
          Electricity flows in a loop (in the direction of the arrows shown)
          from the battery (our power source) to the load (the light bulb in
          this case) and then back into the battery.
        </p>
        <p>
          If there is a break in the loop, (an open circuit), the circuit is
          incomplete and no electricity will flow. It's like a conveyor belt -
          the entirety of it must be intact, otherwise it won't work properly.
        </p>
        <p>
          Note that the direction show in the image above is 'conventional
          current', which assumes that power flows from the positive to
          negative. The reverse is called "electron current", which actually
          describes the flow of electrons (a more realistic model.){' '}
        </p>
        <h2>We have a light!</h2>
        <p>
          If you were to build the circuit above, you would see the light turn
          on! Of course, like building anything, there are a couple of
          'parameters' (values) we can tweak with this circuit. The things we
          care about are Voltage & Amperage.
        </p>
        <h3>Voltage</h3>
        <p>
          Voltage is (electric) potential difference. This is the difference in
          electric potential between two points. The units for this is Volts
          (symbol V). The higher the voltage, the more energy is in the circuit.
        </p>
        <p>
          Let's use a water analogy: think of voltage as the pressure of water
          in a pipe. The higher the pressure, the more water can flow through
          the pipe.
        </p>
        <GuideImage
          src="/images/guide/guide-graphics_voltage.png"
          size="MEDIUM"
        />
        <h3>Amperage</h3>
        <p>
          Amperage is The amount of current flowing through a circuit. The units
          for this is Amperes (shortened as amps, with the symbol A).
        </p>
        <p>
          Think of amperage as the size of the diameter of the pipe. The larger
          the diameter, the more water can flow through it at once. It's
          important to note here that you can have a very large diameter pipe,
          but the water is very still. This is the same as having a high
          amperage but low voltage.
        </p>
        <GuideImage
          src="/images/guide/guide-graphics_amperage.png"
          size="MEDIUM"
        />
        <p>
          Understanding these{' '}
          <a
            href="https://science.howstuffworks.com/environmental/energy/question501.htm"
            target="_BLANK"
          >
            basic units in electricity
          </a>{' '}
          and a couple of basic equations can help you build the starter
          intuition for understanding the relations between these different
          properties. We won't be going into the math here, but we recommend the
          extra reading if you're interested.
        </p>
        <PageNavigationButtons />
      </div>
    </div>
  );
};

export default Page;
