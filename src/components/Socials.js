import React from 'react';
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa';

const Socials = () => {
  return (
    <ul>
      <li>
        <a href="#">
          <FaGoogle />
        </a>
      </li>
      <li>
        <a href="#">
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a href="#">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="#">
          <FaGithub />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
