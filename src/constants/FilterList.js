const FilterList = [
  {
    filter: 'Species',
    type: [
      { id: 'human', value: 'Human' },
      { id: 'mythlog', value: 'Mythlog' },
      { id: 'other species', value: 'Other Species...' }
    ]
  },
  {
    filter: 'Gender',
    type: [
      { id: 'male', value: 'Male' },
      { id: 'female', value: 'Female' }
    ]
  },
  {
    filter: 'Origin',
    type: [
      { id: 'unknown', value: 'Unknown' },
      { id: 'post-apocalyptic earth', value: 'Post-Apocalyptic Earth' },
      { id: 'nuptia 4', value: 'Nuptia 4' },
      { id: 'other origins', value: 'Other Origins...' }
    ]
  }
];

export default FilterList;
