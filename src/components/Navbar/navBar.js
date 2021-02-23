import React from 'react';
import '../Navbar/navBar.css';
import Logo from '../images/beach.svg';

const navBar = () => {
    return (
        <div className="nav">

<div className="menu-bar">
    <span>MENU</span>
    </div>
   <nav>


   <ul>
            <img src={Logo} className="logo" alt="logo" />

				
				   <li>Restauranter</li>
					<li>Produkter</li>
					<li>Nyhedsbrev</li>
					<li>Kontakt	</li>
				</ul>
			</nav>
     
     
      
    </div>

	)
	
}

export default navBar;