import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className='py-10 bg-gray-900 s-screen'>
            {children}
        </div>
    );
};

export default Layout;