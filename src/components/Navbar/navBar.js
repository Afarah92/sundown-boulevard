import React from 'react';
import '../Navbar/navBar.css';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../images/beach.svg';



function navBar() {



	
    return (
        <div className="nav">

<div className="menu-bar">
<MenuIcon className="icon"></MenuIcon>	


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