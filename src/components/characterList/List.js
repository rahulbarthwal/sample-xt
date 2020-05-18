import React, { useState } from 'react';

import { api } from '../../api';
import { useServerData } from '../../state/serverDataContext';
import { timeSince, sortData } from '../../utils';

const CharacterListComponent = ({
  filteredCharacterList = [],
  sortType = ''
}) => {
  const servercharacterList = useServerData(data => {
    return data.characterList || [];
  });
  const [characterList] = useState(servercharacterList);
  const updatedList = filteredCharacterList.length
    ? filteredCharacterList
    : characterList;
  return (
    <div className="character-list-container">
      {sortData(updatedList, 'id', sortType).map(character => {
        const timeString = timeSince(
          new Date(Date.now() - new Date(character.created))
        );
        return (
          <div className="character-list" key={character.id}>
            <div
              className="character-image"
              style={{
                background: `url(${character.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="desc">
                <p className="mb-0">{character.name}</p>
                <p className="mb-0">{`id: ${character.id} - created ${timeString} ago`}</p>
              </div>
            </div>
            <div className="character-details">
              <div className="details-list">
                <span className="key">Status</span>
                <span className="value">{character.status}</span>
              </div>
              <div className="details-list">
                <span className="key">Species</span>
                <span className="value">{character.species}</span>
              </div>
              <div className="details-list">
                <span className="key">Gender</span>
                <span className="value">{character.gender}</span>
              </div>
              <div className="details-list">
                <span className="key">Origin</span>
                <span className="value">{character.origin.name}</span>
              </div>
              <div className="details-list border-0">
                <span className="key">Last Location</span>
                <span className="value">{character.location.name}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

CharacterListComponent.fetchData = () => {
  return api.characterList.getList().then(characterList => {
    return {
      characterList
    };
  });
};

export default CharacterListComponent;
