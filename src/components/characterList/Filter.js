import React from 'react';
import { Checkbox } from '../common';
import { FilterList } from '../../constants';

const Filter = ({ setFilter, filters }) => {
  return (
    <div className="filter-container">
      <span className="filter-header">Filters</span>
      {FilterList.map((filterListItems, index) => {
        return (
          <div className="filter-box" key={`filter--${index}`}>
            <span className="header">{filterListItems.filter}</span>
            <div className="list">
              {filterListItems.type.map((t, index) => {
                return (
                  <Checkbox
                    key={`checkbox--${index}`}
                    id={t.id}
                    onChange={(id, value) => {
                      setFilter(id, filterListItems.filter, value);
                    }}
                    label={t.value}
                    checked={
                      filters[filterListItems.filter] &&
                      filters[filterListItems.filter].indexOf(t.id) !== -1
                    }
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
