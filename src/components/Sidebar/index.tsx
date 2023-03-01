import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './Sidebar.module.scss';
import cx from 'classnames';
import TopBar from '../TopBar';

export const navigationLinks = [
  { heading: 'Introduction' },
  {
    title: 'Hello!',
    href: '/',
  },
  {
    title: 'Basics of Electronics',
    href: '/chapter/electronics',
  },
  {
    title: 'Intro to Arduino!',
    href: '/chapter/intro-to-arduino',
    type: ['arduino'],
  },
  {
    title: 'Blinking an LED',
    href: '/chapter/blink',
    type: ['arduino'],
  },
  {
    title: 'WS2812b LEDs',
    href: '/chapter/ws2812b',
    type: ['arduino'],
  },
  { heading: 'The MIT Illuminations App' },
  {
    title: 'The App',
    href: '/chapter/intro-to-app',
    type: ['app'],
  },
  {
    title: 'App & Arduino',
    href: '/chapter/illuminations-and-arduino',
    type: ['app', 'arduino'],
  },
  {
    title: 'Slit Scan Photography',
    href: '/chapter/slit-scan',
    type: ['app'],
  },
  { title: 'p5.js', href: '/chapter/p5-js', type: ['app'] },

  { heading: 'Making it Dynamic' },
  {
    title: 'Inputs & Buttons',
    href: '/chapter/inputs',
    type: ['arduino'],
  },
  {
    title: 'Analog In',
    href: '/chapter/analog-in',
    type: ['arduino'],
  },
  {
    title: 'Potentiometers',
    href: '/chapter/potentiometer',
    type: ['arduino'],
  },
  {
    title: 'MBTA API',
    href: '/chapter/mbta-api',
    type: ['app'],
  },
];

const SidebarContent = () => {
  const [activePage, setActivePage] = useState('');
  let id = 0;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const activePage = window.location.pathname;
      setActivePage(activePage);
    }
  }, []);

  return (
    <div className={styles.sidebarContent}>
      <ul>
        {navigationLinks.map((link, key) => {
          if (link.heading) {
            return <h3 key={key}>{link.heading}</h3>;
          }
          if (link.href) {
            id += 1;
            return (
              <Link key={key} href={`${link.href}`}>
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
                      link.type.map((type, key2) => (
                        <span
                          className={cx(styles[type], styles.type)}
                          key={key2}
                        ></span>
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

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <TopBar />
      <div className={styles.sidebarMobile}>
        <label className={styles.menuButtonHitArea}>
          <input
            className={cx('forceStartupHide', styles.menuButton)}
            type="checkbox"
          />
          <div className={cx(styles.hotdog, styles.hotdogTop)} />
          <div className={cx(styles.hotdog, styles.hotdogMiddle)} />
          <div className={cx(styles.hotdog, styles.hotdogBottom)} />
          <div className={styles.sidebarMobileContentContainer}>
            <SidebarContent />
          </div>
        </label>
      </div>
      <div className={styles.sidebarDesktop}>
        <SidebarContent />
      </div>
    </div>
  );
};

export default Sidebar;
