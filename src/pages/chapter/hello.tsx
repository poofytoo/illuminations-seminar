import GuideImage from '../../components/GuideImage';
import Sidebar, { navigationLinks } from '../../components/Sidebar';
import PageNavigationButtons from '../../components/PageNavigationButtons';
import Link from 'next/link';

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
          This is the learning guide for{' '}
          <a href="https://illuminations.mit.edu" target="_blank">
            MIT Illuminations
          </a>
          , an ongoing experiment in creative computation at the MIT Welcome
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
          The lights dynamically illuminating the Welcome Center are, like the
          MIT community, colorful, ever-changing, and alive. They're inspired by
          a long history of the MIT community deploying creative installations
          of colorful lights in dormitories, on bridges and buildings, and
          around campus. Meanwhile, the software driving the lights is published
          under the{' '}
          <a href="https://opensource.org/licenses/MIT" target="_blank">
            open-source MIT license
          </a>
          , so anyone in the world can learn how to make their own.
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
          We'll walk you through how to build your own version of MIT
          Illuminations at home, by using an open-source microcontroller called
          an Arduino to communicate with a strip of individually addressable LED
          lights. If you don't know what that means - don't worry! This guide is
          designed for a wide audience, from beginners with no electronics
          experience to veterans who have prototyped digital devices before. If
          you're not interested in learning all the nitty-gritty details of
          electronics, feel free to
        </p>
        <p>
          If you're not interested in learning all the nitty gritty details of
          electronics, feel free to{' '}
          <Link href="/chapter/intro-to-app">
            jump straight to the Illuminations App!
          </Link>
        </p>
        <h2>How do I use this guide?</h2>
        <p>
          The goal of Learn.Illuminations is to give you an introduction to the
          science and language of light installations, and to explain how MIT
          Illuminations works. These fundamentals will hopefully help you build
          your online search intuition and open the door for you to explore
          further.
        </p>
        <p>
          The content in this guide is split up into multiple chapters, with
          labels that indicate what each chapter is about.
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
                Information on the next page will give you a sense of how to
                procure some of these materials.
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
                we'll be using the MIT Illuminations App to simulate/control
                lights! This is the same app used to control Illuminations in
                the welcome center.
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          If you're interested in building your own blinky lights at home,{' '}
          <Link href="/chapter/intro-to-arduino#components">
            Chapter 3. Intro to Arduino!
          </Link>{' '}
          contains a list of recommended components!
        </p>
        <h2>
          How does this guide differ from the thousands of other guides out
          there?
        </h2>
        <p>
          We're glad you asked! These{' '}
          {navigationLinks.filter((item) => item.heading === undefined).length}{' '}
          chapters build to an end goal of understanding and working with the
          MIT Illuminations lights. This means that there will be a heavier
          focus on lighting and controlling lights within one particular app.
          While there is a chapter on basic electronics, we won't focus as
          heavily on the math, nor other common electrical components. This
          doesn't mean they're not important! We hope that this guide serves as
          a starting point for you to explore the world of electronics and
          lighting!
        </p>
        <h2>Additional Information</h2>
        <p>
          Want to dive deeper into any of the materials in this guide? There are
          a couple of resources we recommend:
        </p>
        <ul>
          <li>
            <a href="https://www.adafruit.com/">AdaFruit</a> is an open-source
            hardware company based in New York City that sells great, reliable,
            beginner-electronic friendly parts. It also has great tutorials and
            guides.
          </li>
          <li>
            <a href="https://www.instructables.com/">Instructables</a> is a
            website specializing in user-created and -uploaded do-it-yourself
            projects
          </li>
        </ul>
        <p>
          This guide is also open source and{' '}
          <a
            href="https://github.com/poofytoo/illuminations-seminar"
            target="_blank"
          >
            found on GitHub here
          </a>
          . If you spot anything wrong, feel free to leave an issue. If you want
          to contribute, feel free to submit a pull request! We're excited to
          help everyone in the world build more awesome blinky lights.
        </p>
        <PageNavigationButtons />
      </div>
    </div>
  );
};

export default Page;
