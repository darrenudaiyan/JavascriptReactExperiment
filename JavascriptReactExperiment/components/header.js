import React from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/accMatrix">
      <a style={linkStyle}>ACC Matrix</a>
    </Link>
    <Link href="/accGraph">
      <a style={linkStyle}>ACC Graph</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;