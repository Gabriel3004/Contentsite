import './Header.css'

function Header() {

    return (
      <>
      <header>
        <nav className='navbar'>
            <div className='logo1'> 

            <img src='/img/logo.png'alt='logo' className='lgo'></img>

            </div>

            <p className='desc'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita consequuntur voluptas sit!
            </p>
            <div >
                <ul className='menu'>
                    <li>Menu</li>
                    <li>Contact</li>
                    <li>Basket</li>
                    <li>Login</li>
                </ul>
            </div>

        </nav>
      </header>

      
      </>
    );
  }

  export default Header;