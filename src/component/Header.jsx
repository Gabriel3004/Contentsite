import Technotools from "./Bilder/Technotools.png";
import  PopupGfg  from "./PopupGfg";


function Header() {

    return (
      <>
      <header>
        <nav className='navbar'>
            <div className='logo1'> 
            <img id='logo-techno' width= "400px" height="250px" src={Technotools} alt="Logo" />
            </div>
            
            <div className='menu'>
              <PopupGfg />
                        
            </div>
        </nav>
      </header>

      </>
    );
  }

  export default Header;