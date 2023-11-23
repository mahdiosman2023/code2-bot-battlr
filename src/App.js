import './App.css';
import React, { useState } from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';



function App() {

      const [army, setArmy] = useState ([])

      const handleEnlist = (bot) => {
            if (!army.find((b) => b.id === bot.id)) {
                  setArmy ([...army, bot]);
            }
      
      };
      
      const handleRelease = (bot) => {
            setArmy(army.filter((b)  => b.id !== bot));

      };

      const handleDischarge = async (botId) => {
            try {
                  await fetch(`http://localhost:8006/bots/${botId}`, {method :'DELETE'});
                  setArmy(army.filter((b)  => b.id !== botId));
      
            }
            catch (error) {
                  console.error('Error discharging bot:', error);
            }
      };
   

return (
      <div>
      <h1>BOT BATTLR</h1>
      <YourBotArmy army= {army} onRelease={handleRelease} onDischarge={handleDischarge}/>
      <BotCollection onEnlist = {handleEnlist}/>
      
      </div>
      );
}

export default App;