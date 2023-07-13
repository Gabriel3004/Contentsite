// import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
export default function PopupGfg() {
    return (
        <div>
            <Popup trigger=
                {<button className='login'> Login </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                <h1>Make your Account</h1>
                                <div id='myform'>
                                        <div className='id-email'>
                                            <h4>Email</h4>
                                            <form action="">
                                            <input type="email" placeholder='goodvybes@yea.com' /></form>
                                        </div>
                                        <div className='id-password' >
                                            <h4>Password</h4>
                                            <form action="">
                                            <input type="password" placeholder='YourPasswordBaby' required /></form>
                                        </div>
                                </div>
                            
                            </div>
                            <div className='decision'>
                                <button className='decision-b'
                                onClick=
                                    {() => close()}>
                                        Cancel
                                </button>
                                <button className='decision-b'
                                onClick=
                                    {() => close()}>
                                        Accept
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
}