import React, { useState } from 'react';
import './App.css';
import CharacterCard from './CharacterCard.jsx';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // Static data for cartoon characters (can be replaced with an API response)
  const characters = [
    {
      name: 'Doraemon',
      image: 'https://i.pinimg.com/736x/87/59/8b/87598b8dd6f4bbf4162e50671af89584.jpg', // replace with a real image URL
      telecastTime: '5:30 PM',
      previousEpisode: 'Episode 102',
      nextEpisode: 'Episode 104',
      info: 'Doraemon is a robotic cat from the future, helping Nobita.'
    },
    {
      name: 'Spider-Man',
      image: 'https://i.pinimg.com/474x/d5/f4/8c/d5f48cd2068641a1f64fb6e7af617cd5.jpg',
      telecastTime: '6:00 PM',
      previousEpisode: 'Episode 3',
      nextEpisode: 'Episode 5',
      info: 'Spider-Man is a superhero with spider-like abilities, fighting villains.'
    },
    {
      name: 'Shinchan',
      image: 'https://i.pinimg.com/474x/23/db/d7/23dbd75622cff5be23be525657fea9cc.jpg',
      telecastTime: '4:00 PM',
      previousEpisode: 'Episode 210',
      nextEpisode: 'Episode 212',
      info: 'Shinchan is a mischievous young boy who loves to cause trouble.'
    },
    {
      name: 'Tom and Jerry',
      image: 'https://i.pinimg.com/736x/3c/3f/d8/3c3fd8434b645eadbe997f1ba47403d7.jpg',
      telecastTime: '7:00 PM',
      previousEpisode: 'Episode 150',
      nextEpisode: 'Episode 152',
      info: 'Tom and Jerry is a comedy show about the rivalry between a cat and a mouse.'
    },
  ];

  return (
    <div className="App">
      <div className="header">
        <h1>Cartoon Characters</h1>
        <div className="options">
          <button>Cartoon News</button>
          <button>Latest Episodes</button>
          <button>Watch Cartoons</button>
        </div>
      </div>

      <div className="cartoons">
        {characters.map((character) => (
          <CharacterCard
            key={character.name}
            character={character}
            setSelectedCharacter={setSelectedCharacter}
          />
        ))}
      </div>

      <div className="footer">
        <button>Cartoon History</button>
        <button>Merchandise</button>
        <button>Fan Club</button>
      </div>

      {selectedCharacter && (
        <div className="infoModal">
          <h2>{selectedCharacter.name}</h2>
          <img src={selectedCharacter.image} alt={selectedCharacter.name} />
          <p><strong>Telecasting Time:</strong> {selectedCharacter.telecastTime}</p>
          <p><strong>Previous Episode:</strong> {selectedCharacter.previousEpisode}</p>
          <p><strong>Next Episode:</strong> {selectedCharacter.nextEpisode}</p>
          <p>{selectedCharacter.info}</p>
          <button onClick={() => setSelectedCharacter(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
