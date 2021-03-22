import React from 'react';
import { LayoutGeneral } from './Layout.Style';

function Layout({ children }) {
  return <LayoutGeneral>{children}</LayoutGeneral>;
}

export default Layout;
