import './Sign_up.css';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Sign_up() {
    const navigate = useNavigate();
    useEffect(() => {
        const starsContainer = document.querySelector(".njmat");

        if (starsContainer) {
            for (let i = 0; i < 40; i++) { // Génère 50 étoiles
                const star = document.createElement("div");
                star.className = `star ${Math.random() > 0.7 ? "small" : "tiny"}`;
                star.style.left = Math.random() * 98 + "vw"; 
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
                    <input type="Password" placeholder="Phone number or email" required /><div className="mail"></div>
                </div>

                <div className="inputbox">
                    <input type="Password" placeholder="Password" required /><div className="lock"></div>
                </div>

                <div className="inputbox">
                    <input type="Password" placeholder="corfirm Password" required /><div className="lock"></div>
                </div>

                <div className="singup">
                    <button type="submit" className="btn" onClick={() => navigate("/chat")}>sign up</button>
                </div>

                <div className="register">
                    <span className="creat">You have an account ? 
                        <button className="login" onClick={() => navigate("/login")}>log in!</button>
                    </span>
                </div>
            </div>
            <div className="help">
                    <span className='contact'>if you have problem
                        <a className='acc' href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fimad.zak.xy%2F&is_from_rle">contact us!</a>
                    </span>
            </div>
        </>
    )
}

export default Sign_up