import React from 'react';

// local imports
import "./Layout.scss";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
 
export default Layout;