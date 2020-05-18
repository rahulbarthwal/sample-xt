import React, { useState } from 'react';
import { CharacterListComponent, CharacterListFilters } from '../components';

import { api } from '../api';

const CharacterListPage = () => {
  let searchText = React.createRef();
  const [filters, setFilters] = useState({});
  const [filteredCharacterList, setFilteredCharacterList] = useState([]);
  const [sortType, setSortType] = useState('');
  const onChangeFilters = (id, type, value) => {
    if (value) {
      const filter = filters[type] ? filters[type] : (filters[type] = []);
      filter.push(id);
    } else {
      const filter = filters[type];
      filter.splice(filter.indexOf(id), 1);
    }
    setFilters({ ...filters });
    api.characterList
      .getList({ ...filters, name: [searchText.value] })
      .then(res => {
        setFilteredCharacterList(res);
      });
  };
  const onSearchCharacter = value => {
    api.characterList.getList({ ...filters, name: [value] }).then(res => {
      setFilteredCharacterList(res);
    });
  };
  return (
    <div className="character-list d-flex">
      <CharacterListFilters setFilter={onChangeFilters} filters={filters} />
      <div className="page-container">
        <div className="selected-filter-container">
          {Object.keys(filters).length ? (
            <div className="selected-filter">
              <span className="header">Selected Filters</span>
              <div className="selected-filter-list">
                {Object.keys(filters).map((filter, i) => {
                  return filters[filter].map((item, index) => {
                    return (
                      <div
                        className="item"
                        key={`filter--${index}`}
                        onClick={e => {
                          onChangeFilters(item, filter, false);
                        }}
                      >
                        <span>{item}</span>
                      </div>
                    );
                  });
                })}
              </div>
            </div>
          ) : null}
          <div className="custom-filter-container">
            <div className="search-box">
              <span className="header">Search by Name</span>
              <div className="search-box-input">
                <input
                  type="text"
                  className="serach-field"
                  ref={i => (searchText = i)}
                />
                <input
                  type="button"
                  value="Search"
                  className="serach-button"
                  onClick={e => {
                    onSearchCharacter(searchText.value);
                  }}
                />
              </div>
            </div>
            <div className="sort-box">
              <select
                id="sort-type"
                name="sort-list"
                onChange={e => {
                  setSortType(e.currentTarget.value);
                }}
              >
                <option value="">Sort by Id</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
        </div>
        <CharacterListComponent
          filteredCharacterList={filteredCharacterList}
          sortType={sortType}
        />
      </div>
    </div>
  );
};

export default CharacterListPage;
