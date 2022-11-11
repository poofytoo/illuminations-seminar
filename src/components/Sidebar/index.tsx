import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './Sidebar.module.scss';
import cx from 'classnames';

export const navigationLinks = [
  { heading: 'Introduction' },
  {
    title: 'Hello!',
    href: '/hello',
  },
  {
    title: 'Intro to Illuminations!',
    href: '/intro-to-illuminations',
  },
  {
    title: 'Intro to Arduino!',
    href: '/intro-to-arduino',
    type: ['arduino'],
  },
  {
    title: 'Blinking an LED',
    href: '/blink',
    type: ['arduino'],
  },
  {
    title: 'WS2812B LEDs',
    href: '/ws2812b',
    type: ['arduino'],
  },
  { heading: 'The Illuminations App' },
  {
    title: 'App + Your Arduino',
    href: '/intro-to-app',
    type: ['app', 'arduino'],
  },
  {
    title: 'Slit Scan Photography',
    href: '/slit-scan',
    type: ['app'],
  },
  { title: 'p5.js', href: '/p5-js', type: ['app'] },
  {
    title: 'Best Practices',
    href: '/best-practices',
    type: ['app'],
  },
  { heading: 'Making it Dynamic' },
  {
    title: 'Inputs & Buttons',
    href: '/inputs',
    type: ['arduino'],
  },
  {
    title: 'Analog In',
    href: '/analog-in',
    type: ['arduino'],
  },
  {
    title: 'Potentiometers',
    href: '/potentiometer',
    type: ['arduino'],
  },
  {
    title: 'MBTA API',
    href: '/mbta-api',
    type: ['app'],
  },
];

const Sidebar = () => {
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const activePage = window.location.pathname;
      setActivePage(activePage);
    }
  }, []);

  let id = 0;
  return (
    <div className={styles.sidebar}>
      <ul>
        {navigationLinks.map((link, key) => {
          if (link.heading) {
            return <h3>{link.heading}</h3>;
          }
          if (link.href) {
            id += 1;
            return (
              <Link key={key} href={`/chapter${link.href}`}>
                <li
                  className={cx({
                    [styles.active]: activePage === `/chapter${link.href}`,
                  })}
                >
                  <span className={styles.text}>
                    <span className={styles.chapterId}>{id}</span>
                    {link.title}
                  </span>
                  <span className={styles.icons}>
                    {link.type &&
                      link.type.map((type) => (
                        <span className={cx(styles[type], styles.type)}></span>
                      ))}
                  </span>
                </li>
              </Link>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
