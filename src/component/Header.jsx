import './Header.css'

function Header() {

    return (
      <>
      <header>
        <nav className='navbar'>
            <div className='logo1'> 

            <img src=''alt='logo'></img>

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

      <main>
        <div className='elements'>
            <div className='elt'>
                <h2 className='article'></h2>
                <p className='infos'></p>
                <img src='' alt=''></img>
            </div>
            <div className='elt'>
            <h2 className='article'></h2>
                <p className='infos'></p>
                <img src='' alt=''></img>
            </div>
            <div className='elt'>
            <h2 className='article'></h2>
                <p className='infos'></p>
                <img src='' alt=''></img>
            </div>
            <div className='elt'>
            <h2 className='article'></h2>
                <p className='infos'></p>
                <img src='' alt=''></img>
            </div>
        </div>
        <div className='scroll'>
            <button className='btn'>left</button>
            <button className='btn'>right</button>
        </div>
      </main>
      </>
    );
  }

  export default Header;