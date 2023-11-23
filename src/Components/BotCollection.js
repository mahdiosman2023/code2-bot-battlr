import React, { useEffect, useState } from "react";



function BotCollection({ onEnlist}) {
    

    const [bots, setBots] = useState([])


    
    

    useEffect(() => {
        fetch("http://127.0.0.1:8001/bots")
        .then(resp => resp.json())
        .then(data => setBots(data))
    }, [])

    
    
    
    return (
        <div>
        
        <h2>Bot Collection</h2>

        <ul>
            {bots.map((bot)=>(
            <li key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h4>{bot.name}</h4>
            <button onClick={()=> onEnlist(bot)}> Enlist Bot</button>
            
            
            </li>
        
))}
</ul>
        
        </div>
    )
}


export default BotCollection;