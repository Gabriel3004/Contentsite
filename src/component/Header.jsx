import Technotools from "./Bilder/Technotools.png";

function Header() {

    return (
      <>
      <header>
        <nav className='navbar'>
            <div className='logo1'> 
            <img id='logo-techno' width= "400px" height="250px" src={Technotools} alt="Logo" />
            </div>
            
            <div className='menu'>
                    <li><button className="login"> <a href=""> Login</a></button></li>     
            </div>

        </nav>
      </header>

      </>
    );
  }

  export default Header;