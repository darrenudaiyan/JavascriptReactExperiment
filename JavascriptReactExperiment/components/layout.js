import React from 'react';
import Header from './header';

const layoutStyle = {
  margin: 1,
  padding: 1,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;