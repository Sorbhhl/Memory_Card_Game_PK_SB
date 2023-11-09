"use client"
import React, { useState, useEffect } from 'react';
import MemoryCardsGame from './MemoryCardsGame';

export default function SetUpGame() {
    const [level, setLevel] = useState('easy');
    const [started, setStarted] = useState(false);
    const [timer, setTimer] = useState(60);
    const [numberOfCards, setNumberOfCards] = useState(16)

    //Set game level
    const handleLevelChange = (selectedLevel) => {
        setLevel(selectedLevel);
        if (selectedLevel === 'easy') {
            setNumberOfCards(16);
          } else if (selectedLevel === 'medium') {
            setNumberOfCards(24);
          } else if (selectedLevel === 'difficult') {
            setNumberOfCards(30);
          }
      };

    //Start and stop game
    const handleStart = (startValue) => {
        setStarted(startValue);
        setTimer(60);
    }

    //Game timer
    useEffect(() => {
        if (started) {
          const intervalId = setInterval(() => {
            if (timer > 0) {
              setTimer(timer - 1);
            } else {
              clearInterval(intervalId);
            }
          }, 1000);
    
          return () => {
            clearInterval(intervalId);
          };
        }
    }, [started, timer]);

    return(
        <>
            {started === false ?
            <>
                <p>Select level:</p>
                <div className="flex items-center gap-4">
                    <button className={`bg-blue-500 font-bold py-2 px-4 rounded-full hover:bg-blue-800
                        ${level === 'easy' ? 'bg-blue-800' : ''}`} onClick={() => handleLevelChange('easy')}
                    >
                        Easy
                    </button>
                    <button className={`bg-blue-500 font-bold py-2 px-4 rounded-full hover:bg-blue-800
                        ${level === 'medium' ? 'bg-blue-800' : ''}`} onClick={() => handleLevelChange('medium')}
                    >
                        Medium
                    </button>
                    <button className={`bg-blue-500 font-bold py-2 px-4 rounded-full hover:bg-blue-800
                        ${level === 'difficult' ? 'bg-blue-800' : ''}`} onClick={() => handleLevelChange('difficult')}
                    >
                        Difficult
                    </button>
                </div>
                <button className="bg-orange-500 hover:bg-orange-700 font-bold py-2 px-4 rounded text-lg mt-8"
                onClick={() => handleStart(true)}
                >START</button>
            </>
            :
            <>
                <MemoryCardsGame level={level} setLevel={setLevel} numberOfCards={numberOfCards} setNumberOfCards={setNumberOfCards}
                timer={timer} setTimer={setTimer}/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                onClick={() => handleStart(false)}
                >
                    Back to Menu
                </button>
            </>
            }
        </>
    )
}