import React from 'react';

import NavDrawer from '../nav_drawer/nav_drawer';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navIsOpen: false,
    }

    this.closeNav = this.closeNav.bind(this);
  }

  closeNav() {
    this.setState({ navIsOpen: false })
  }

  render() {
    return (
      <navigation>
        <div>Logo</div>
        <div className='nav-toggle'
          onClick={ () => this.setState({ navIsOpen: true })}
          >&#9776;
        </div>
        <NavDrawer 
          navIsOpen={this.state.navIsOpen}
          closeNav={this.closeNav}
        />
      </navigation>
    );
  }
}

export default NavBar;
