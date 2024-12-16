import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./GameDetails.css";

const GameDetails = () => {
  const { id } = useParams(); // Extract the game ID from the URL
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${id}?key=e7ac192643c54adea457767b225fa124`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch game details");
        }
        const data = await response.json();
        setGame(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [id]);

  if (loading) {
    return <div className="game-details-loading">Loading game details...</div>;
  }

  if (error) {
    return <div className="game-details-error">{error}</div>;
  }

  return (
    <div className="game-details">
      {game && (
        <>
          <h1 className="game-details-title">{game.name}</h1>
          <img
            src={game.background_image}
            alt={game.name}
            className="game-details-image"
          />
          <div className="game-details-info">
            <p><strong>Released:</strong> {game.released}</p>
            <p><strong>Rating:</strong> {game.rating} / 5</p>
            <p><strong>Genres:</strong> {game.genres.map((genre) => genre.name).join(", ")}</p>
            <p className="game-details-description">{game.description_raw}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default GameDetails;