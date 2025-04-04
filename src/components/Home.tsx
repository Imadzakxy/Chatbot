import "./Home.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        const starsContainer = document.querySelector(".njmat");

        if (starsContainer) {
            for (let i = 0; i < 40; i++) {
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

            <div className="login">
                    <button type="submit" className="btn" onClick={() => navigate("/log_in")}>log in</button> 
            </div>
            
            <div className="singup">
                    <button type="submit" className="btn" onClick={() => navigate("/sign_up")}>sign up</button>
            </div>

            <div className="singup">
                    <button type="submit" className="btn" onClick={() => navigate("/chat")}>chat</button>
            </div>
        </>
    );
}

export default Home