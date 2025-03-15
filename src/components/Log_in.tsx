import './Log_in.css'
import React, { useEffect } from "react";

function Log_in() {
    useEffect(() => {
        const starsContainer = document.querySelector(".njmat");

        if (starsContainer) {
            for (let i = 0; i < 43; i++) { // Génère 50 étoiles
                const star = document.createElement("div");
                star.className = `star ${Math.random() > 0.7 ? "small" : "tiny"}`;
                star.style.left = Math.random() * 100 + "vw"; 
                star.style.top = Math.random() * 30 + "vh";
                starsContainer.appendChild(star);
            }
        }
    }, []);
    return (
        <>  
            <div className="njmat">
            </div>

            <header>
                <h1>Chatbot</h1>
            </header>
            
            <div className="box">

                <div className="inputbox">
                    <input type="Username" placeholder="Username" required /><div className="user"></div>
                </div>

                <div className="inputbox">
                    <input type="Password" placeholder="Password" required /><div className="lock"></div>
                </div>

                <div className="remember">
                    <span className="rem">
                        <input type="checkbox" className="check"/>
                        Remember me
                    </span>
                    <button className="forgot">Forgot password!</button>
                </div>

                <div className="login">
                    <button type="submit" className="btn" onClick={() => window.location.href='./Chat.tsx'}>log in</button>
                </div>

                <div className="register">
                    <span className="creat">Don't have an account ? 
                        <button className="signup">sign up!</button>
                        {/* onClick={() => window.location.href='./Sign_up.tsx'} */}
                    </span>
                </div>
            </div>
            <div className="help">
                    <span className='contact'>if you have problem
                        <a className='acc' href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fimad.zak.xy%2F&is_from_rle">contact us!</a>
                    </span>
            </div>
        </>
    );
}

export default Log_in