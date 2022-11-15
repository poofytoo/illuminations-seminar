import GuideImage from '../../components/GuideImage';
import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';
import sidebar from '../../components/Sidebar/Sidebar.module.scss';
import cx from 'classnames';

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>Hello!</h1>
        <h2>Welcome!</h2>
        <p>
          This is the learning guide for MIT Illuminations. MIT Illuminations is
          an ongoing experiment in creative computation at the MIT Welcome
          Center located in{' '}
          <a
            href="https://www.google.com/maps/place/MIT+Welcome+Center/@42.3621496,-71.0858094,15z/data=!4m2!3m1!1s0x0:0x5655bc63bb8beefe?sa=X&ved=2ahUKEwjHyJqm7rD7AhU-FFkFHQ_3BWMQ_BJ6BAh0EAg"
            target="_BLANK"
          >
            Kendall Square
          </a>
          .
        </p>
        <GuideImage
          src="/images/guide/welcome-center-exterior.jpg"
          size="LARGE"
        />
        <p>
          The lights dynamically illuminating the center are, like the MIT
          community, colorful, ever-changing, and alive. They were inspired by a
          long history of the MIT community deploying creative installations of
          colorful lights in dormitories, on bridges and buildings, and around
          campus. Meanwhile, the software driving the lights is published under
          the open-source MIT license, so anyone in the world can learn how to
          make their own.
        </p>
        <GuideImage
          src={[
            '/images/guide/illuminations-interior.jpg',
            '/images/guide/illuminations-closeup.jpg',
          ]}
        />
        <h2>
          What is <span className={styles.special}>Learn.Illuminations</span>?
        </h2>
        <p>
          Learn.Illuminations is a guide specifically put together to help
          individuals (like you!) understand the basics of electronics,
          lighting, and eventually be able to program your own lighting sequence
          that could be run on the lights at the MIT welcome center.
        </p>
        <p>
          To work up to the big Illumination lights, we'll walk you through how
          to build your own, home version of the illuminations lights by using a
          microcontroller called an Arduino to communicate with a strip of
          individually addressable LED lights. The Arduino is an open source
          microcontroller that's great for prototyping digital devices. If you
          don't know what any of this means - don't worry! We'll explain it in
          the next section.
        </p>
        <h2>How to use this Learning Guide</h2>
        <p>
          This learning guide is designed for a wide audience - from beginners
          with no experience to people who have some experience with
          electronics. We'll go over a whole lot of content and touch on a bunch
          of names and terminologies. Nonetheless, the goal is always just to
          give you an introduction and touch upon specific things, which will
          hopefully open the door for you to explore further and help you build
          your online search term intuition.
        </p>
        <p>
          The content is split up into multiple chapters. There are also labels
          that help give you a preview to what the chapter is about.
        </p>
        <table className={styles.legend}>
          <tbody>
            <tr>
              <td valign="top">
                <span
                  className={cx(
                    sidebar.arduino,
                    sidebar.type,
                    styles.largeIcons
                  )}
                ></span>
              </td>
              <td valign="top">
                <strong>Arduino</strong> • If you see this icon, this means the
                chapter will contain information on working with an Arduino.
              </td>
            </tr>
            <tr>
              <td valign="top">
                <span
                  className={cx(sidebar.app, sidebar.type, styles.largeIcons)}
                ></span>
              </td>
              <td valign="top">
                <strong>MIT Illuminations Application</strong> • This icon means
                we'll be using the Illuminations App to simulate/control lights!
                This is the same app used to control Illuminations in the
                welcome center.
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Additional Information</h2>
        <p>
          Want to dive deeper into any of the materials in this guide? There are
          a couple of resources we recommend:
        </p>
        <ul>
          <li>Instructables</li>
        </ul>
        <p>
          This guide itself is also open source and{' '}
          <a
            href="https://github.com/poofytoo/illuminations-seminar"
            target="_blank"
          >
            found on GitHub here
          </a>
          . If you spot anything wrong, feel free to leave a issue - or if you
          want to contribute, feel free to submit a pull request! We're excited
          to help the community build more awesome blinky lights.
        </p>
      </div>
    </div>
  );
};

export default Page;
