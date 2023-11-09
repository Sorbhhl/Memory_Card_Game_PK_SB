"use client"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost, faFire, faSpider, faGamepad, faBolt, faFish, faLeaf, faMedal, faHospital,
    faSnowflake, faHeart, faFeather, faWaterLadder, faTree, faFlask } from '@fortawesome/free-solid-svg-icons';


const initialCardsVariety = [
   { icon: faGhost, color: "text-blue-800" }, { icon: faGhost, color: "text-blue-800" },
   { icon: faFire, color: "text-orange-800" }, { icon: faFire, color: "text-orange-800" },
   { icon: faSpider, color: "text-emerald-800" }, { icon: faSpider, color: "text-emerald-800" },
   { icon: faGamepad, color: "text-fuchsia-800" }, { icon: faGamepad, color: "text-fuchsia-800" },
   { icon: faBolt, color: "text-yellow-700" }, { icon: faBolt, color: "text-yellow-700" },
   { icon: faFish, color: "text-indigo-800" }, { icon: faFish, color: "text-indigo-800" },
   { icon: faLeaf, color: "text-green-800" }, { icon: faLeaf, color: "text-green-800" },
   { icon: faMedal, color: "text-lime-800" }, { icon: faMedal, color: "text-lime-800" },
   { icon: faHospital, color: "text-purple-800" }, { icon: faHospital, color: "text-purple-800" },
   { icon: faSnowflake, color: "text-cyan-800" }, { icon: faSnowflake, color: "text-cyan-800" },
   { icon: faHeart, color: "text-pink-800" }, { icon: faHeart, color: "text-pink-800" },
   { icon: faFeather, color: "text-rose-800" }, { icon: faFeather, color: "text-rose-800" },
   { icon: faWaterLadder, color: "text-red-800" }, { icon: faWaterLadder, color: "text-red-800" },
   { icon: faTree, color: "text-neutral-500" }, { icon: faTree, color: "text-neutral-500" },
   { icon: faFlask, color: "text-slate-500" }, { icon: faFlask, color: "text-slate-500" }

];

//Shuffle cards
function shuffleArray(array) {
   const shuffledArray = [...array];
   for (let i = shuffledArray.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
   }
   return shuffledArray;
}

export default function Cards({numberOfCards, onFalseCardCountZero, timer, resetGame}) {
    const [shuffledCards, setShuffledCards] = useState([]); //Shuffled cards
    const [showCards, setShowCards] = useState([]); //Hide and show cards
    const [selectedCards, setSelectedCards] = useState([]); //Clicked cards
    const [falseCardCount, setFalseCardCount] = useState(numberOfCards); //Reimaining cards

    useEffect(() => {
        const initialCards = initialCardsVariety.slice(0, numberOfCards);
        setShuffledCards(shuffleArray(initialCards));
        setShowCards(Array(numberOfCards).fill(false));
        setSelectedCards([]);
        setFalseCardCount(numberOfCards);
    }, [numberOfCards, resetGame]);

    const handleClick = (index) => {
        if (selectedCards.length < 2 && !showCards[index]) {
            const updatedShowCards = [...showCards];
            updatedShowCards[index] = !updatedShowCards[index];
            setShowCards(updatedShowCards);
            setSelectedCards([...selectedCards, { index, icon: shuffledCards[index].icon }]);

            const cardElements = document.querySelectorAll('.card-element');
            cardElements[index].classList.add('card-rotate');
        }
    };

    //Hide cards if they are not the same
    useEffect(() => {
        if (selectedCards.length === 2) {
            if (selectedCards[0].icon !== selectedCards[1].icon) {
                setTimeout(() => {
                    const updatedShowCards = [...showCards];
                    updatedShowCards[selectedCards[0].index] = false;
                    updatedShowCards[selectedCards[1].index] = false;
                    setShowCards(updatedShowCards);
                }, 500);
            }else{
                setFalseCardCount(falseCardCount - 2); //Update remaining cards count
            }

            setSelectedCards([]);
        }
    }, [selectedCards, showCards, falseCardCount]);

    //GAME SUCCESS
    useEffect(() => {
        if (falseCardCount === 0) {
            onFalseCardCountZero();
            setFalseCardCount("0")
        }
    }, [falseCardCount, onFalseCardCountZero]);

    //Failed level
    useEffect(() => {
        if (timer === 0) {
            setShowCards(Array(numberOfCards).fill(true));;
        }
    }, [timer])

    return (
        <>
            {shuffledCards.map((card, index) => (
                <button className={`bg-sky-950 w-24 rounded p-5 h-16 m-2 card-element ${showCards[index] ? 'card-rotate' : ''}`}
                onClick={() => handleClick(index)} key={index}>
                {showCards[index] ? (
                    <FontAwesomeIcon icon={card.icon} className={`${card.color} h-7`} />
                ) : null}
                </button>
            ))}
            <p className="text-slate-400">Remaining cards: {falseCardCount}/{numberOfCards}</p>
        </>
    );
}
