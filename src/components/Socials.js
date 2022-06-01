import React from 'react';
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa';
import styles from './Socials.module.css';

const Socials = () => {
  return (
    <ul className={styles.socials}>
      <li>
        <a href="https://google.com/">
          <FaGoogle />
        </a>
      </li>
      <li>
        <a href="https://facebook.com/">
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://github.com/">
          <FaGithub />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
