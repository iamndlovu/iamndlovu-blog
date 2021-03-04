import React from 'react';

import headerStyles from './Header.module.scss'

const Header = ({ headerData }) => {

  const {paragraph1, subheading, paragraph2} = headerData;

  return (
    <header className={headerStyles.Header}>
      <div>
        {/* menu */}
        <menu>
          <h1><a href="/">Pardon Ndlovu's Blog</a></h1>
          <nav>
            <ul>
              <li><a href="https://iamndlovu.netlify.app/portfolio/" rel="noreferrer" target="_blank">Portfolio</a></li>
              <li><a href="https://iamndlovu.netlify.app/contact/" rel="noreferrer" target="_blank">Contact</a></li>
            </ul>
          </nav>
        </menu>
        {/*intro*/}
        <section>
          <p>{ paragraph1 }</p>
          <h3><span>{subheading.yellow}</span> {subheading.white}</h3>
          <p>
            { paragraph2 }
          </p>
          <div>
            <i className={headerStyles.updown + " fa fa-arrow-down fa-2x"}></i>
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header
