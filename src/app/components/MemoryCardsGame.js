"use client"
import React, {useState, useEffect} from 'react';
import Cards from './Cards'
import Confetti from './Conffeti';


export default function MemoryCardsGame({ level, numberOfCards, setNumberOfCards, timer, setTimer, setLevel}) {
    const [confettiShouldLaunch, setConfettiShouldLaunch] = useState(false);
    const [nextLevel, setNextLevel] = useState(false);
    const [tryLevelAgain, setTryLevelAgain] = useState (false);
    const [resetGame, setResetGame] = useState(false);

    //GAME SUCCESS
    const handleFalseCardCountZero = () => {
        setNextLevel(true);
        setConfettiShouldLaunch(true);
        setTimeout(() => {
            setConfettiShouldLaunch(false);
          }, 5000);
    };

    const handleNextLevel = () => {
        setNextLevel(false);
        setTimer(60);
        if (level === "easy"){
            setLevel("medium")
            setNumberOfCards(24)
        }else if (level === "medium"){
            setLevel("difficult")
            setNumberOfCards(30)
        }
    }

    //FAILED LEVEL
    useEffect(() => {
        if (timer === 0) {
          setTryLevelAgain(true);
        }
      }, [timer]);

    const handleTryLevel = () => {
        setTryLevelAgain(false);
        setTimer(60);
        setResetGame(!resetGame)
    }

    return (
        <>
            <div className="flex flex-col w-full text-sm items-center gap-6">
                <Confetti shouldLaunch={confettiShouldLaunch} />
                <div className="flex items-center gap-10">
                    <p>Time remaining: {timer} seconds</p>
                    {nextLevel === true ?
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => handleNextLevel()}
                        >
                            Next level
                        </button>
                    : null
                    }
                    {tryLevelAgain === true ?
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => handleTryLevel()}
                        >
                            Try again
                        </button>
                    : null
                    }
                </div>
                {
                    level === "easy" ?
                        <>
                            <div className="grid grid-cols-4 gap-2">
                                <Cards numberOfCards={numberOfCards} onFalseCardCountZero={handleFalseCardCountZero}
                                timer={timer} resetGame={resetGame}/>
                            </div>
                        </>
                    : level === "medium" ?
                        <>
                            <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                                <Cards numberOfCards={numberOfCards} onFalseCardCountZero={handleFalseCardCountZero}
                                timer={timer} resetGame={resetGame}/>
                            </div>
                        </>
                    : level ==="difficult" ?
                        <>
                            <div className="grid grid-cols-5 md:grid-cols-6 gap-2">
                                <Cards numberOfCards={numberOfCards} onFalseCardCountZero={handleFalseCardCountZero}
                                timer={timer} resetGame={resetGame}/>
                            </div>
                        </>
                    : null
                }
            </div>
        </>
    )
}
