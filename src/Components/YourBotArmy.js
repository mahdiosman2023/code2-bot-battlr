import React from "react";
import '../App.css';



function YourBotArmy({ army, onDischarge, onRelease }) {
    
    return (
        <div>
            <h3>Bot Army</h3>

            <ul>
                {army.map((bot)=>(
                    <li key={bot.id}>
                    <img src={bot.avatar_url} alt={bot.name} />
                    <h4>{bot.name}</h4>
                    <button onClick={()=> onRelease(bot)}> Release Bot</button>
                    <button onClick={()=> onDischarge (bot.id)}> Discharge Bot</button>
                    </li>
                ))}
            </ul>
        </div>
    );
    
}

export default YourBotArmy;