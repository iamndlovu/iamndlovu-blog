import React from 'react';

import headerStyles from './Header.module.scss'

const Header = () => {
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
          <p>welcome to my</p>
          <h3><span>100 Days Of Code</span> Blog</h3>
          <p>
            This is where I document my coding journey as I complete the <a href="https://www.100daysofcode.com/" rel="noreferrer" target="_blank">#100DayOfCode</a> challenge. The goal is to write code every single day until the challenge is complete.
          </p>
          <i className="fa fa-arrow-down fa-2x"></i>
        </section>
      </div>
    </header>
  )
}

export default Header
