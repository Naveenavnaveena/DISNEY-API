import React from 'react';

function CharacterCard({ character, setSelectedCharacter }) {
  return (
    <div className="character-card" onClick={() => setSelectedCharacter(character)}>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
    </div>
  );
}

export default CharacterCard;
