import React from 'react';
import { LaptopOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <nav className="navbar bg-white px-5">
      <div className="d-flex align-items-center gap-2">
          <LaptopOutlined className="h-100"/>
        <h5 className="m-0">TW Shows</h5>
      </div>
    </nav>
  );
};

export default Header;