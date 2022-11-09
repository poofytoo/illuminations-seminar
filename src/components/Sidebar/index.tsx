import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './Sidebar.module.scss';
import cx from 'classnames';

export const navigationLinks = [
  {
    id: 6,
    title: 'WS2812B LEDs',
    href: '/6-ws2812b',
  },
  {
    id: 7,
    title: 'Inputs & Buttons',
    href: '/7-inputs',
  },
  {
    id: 8,
    title: 'Analog In',
    href: '/8-analog-in',
  },
  {
    id: 9,
    title: 'Potentiometers',
    href: '/9-potentiometer',
  },
  {
    id: 10,
    title: 'MBTA API',
    href: '/10-mbta-api',
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

  return (
    <div className={styles.sidebar}>
      <ul>
        {navigationLinks.map((link, key) => (
          <Link key={key} href={link.href}>
            <li
              className={cx({
                [styles.active]: activePage === link.href,
              })}
            >
              <span className={styles.chapterId}>{link.id}</span>
              {link.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
