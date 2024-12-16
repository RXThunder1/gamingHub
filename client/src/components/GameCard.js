import React from "react";
import "./GameCard.css"; // Import styles specific to the GameCard component

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img 
        src={game.background_image} 
        alt={game.name} 
        className="game-card-image" 
      />
      <div className="game-card-content">
        <h3 className="game-card-title">{game.name}</h3>
        <p className="game-card-release">Release Date: {game.released}</p>
        <p className="game-card-rating">Rating: {game.rating} / 5</p>
        <button className="game-card-button">
          View Details
        </button>
      </div>
    </div>
  );
};

export default GameCard;