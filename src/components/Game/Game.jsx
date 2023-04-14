import React from "react";
import classes from './Game.module.css'

const Game = ({ questions, step, question, onClickVariant }) => {
    const percentage = Math.round((step / questions.length) * 100)

  return (
    <div className={classes.polotno}>
      <div className={classes['progress-bar']}>
        <div className={classes['progress']} style={{width: `${percentage}%`}}></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
            {
                question.variants.map((text, index) => <li onClick={() => onClickVariant(index)} key={text}>{text}</li>)
            }
      </ul>
    </div>
  );
};

export default Game;
