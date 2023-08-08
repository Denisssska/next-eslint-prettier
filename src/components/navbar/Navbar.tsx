'use client';

import Link from 'next/link';

import styles from './navbar.module.scss';

import DarkModeToggle from '../darkMode/DarkModeToggle';

const links = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Portfolio', url: '/portfolio' },
  { id: 3, title: 'Blog', url: '/blog' },
  { id: 4, title: 'About', url: '/about' },
  { id: 5, title: 'Contact', url: '/contact' },
  { id: 6, title: 'Dashboard', url: '/dashboard' },
];

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link className={styles.logo} href="/">
        MyApp
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map(link => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}

        <button className={styles.logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
