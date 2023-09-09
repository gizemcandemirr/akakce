import * as React from 'react';
import Header from '../header/index';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=' max-h-screen h-screen'>
      <Header />
      <main className='mx-auto container mt-8 h-screen'>{children}</main>
    </div>
  );
};

export default Layout;
