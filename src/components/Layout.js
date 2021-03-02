import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import pageLayout from './Layout.module.css'

const layout = ({children}) => {
  return (
    <div className={ pageLayout.Layout }>
      <div className={ pageLayout.container }>
        <Header />
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default layout
