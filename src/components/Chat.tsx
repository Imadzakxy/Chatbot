import './Chat.css';
import { useEffect } from "react";

function Chat() {
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
            <div className="njmat"></div>

            <header>
                <h1>Chatbot</h1>
            </header>
        </>
    );
}

export default Chat