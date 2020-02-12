const colors = [
  {
    type: 'normal',
    color: 'white',
    backgroundColor: '#A9AA79',
  },
  {
    type: 'fire',
    color: 'white',
    backgroundColor: '#F0812C',
  },
  {
    type: 'water',
    color: 'white',
    backgroundColor: '#6891F0',
  },
  {
    type: 'grass',
    color: 'white',
    backgroundColor: '#79C94F',
  },
  {
    type: 'electric',
    color: 'black',
    backgroundColor: '#F8D12C',
  },
  {
    type: 'ice',
    color: 'black',
    backgroundColor: '#99D9D9',
  },
  {
    type: 'fighting',
    color: 'black',
    backgroundColor: '#C12C23',
  },
  {
    type: 'poison',
    color: 'white',
    backgroundColor: '#A13EA1',
  },
  {
    type: 'ground',
    color: 'white',
    backgroundColor: '#E1C168',
  },
  {
    type: 'flying',
    color: 'black',
    backgroundColor: '#A991F0',
  },
  {
    type: 'psychic',
    color: 'black',
    backgroundColor: '#F85789',
  },
  {
    type: 'bug',
    color: 'white',
    backgroundColor: '#A9B91A',
  },
  {
    type: 'rock',
    color: 'white',
    backgroundColor: '#B9A135',
  },
  {
    type: 'ghost',
    color: 'white',
    backgroundColor: '#715799',
  },
  {
    type: 'dragon',
    color: 'white',
    backgroundColor: '#7135F8',
  },
  {
    type: 'dark',
    color: 'white',
    backgroundColor: '#715746',
  },
  {
    type: 'steel',
    color: 'black',
    backgroundColor: '#B9B9D1',
  },
  {
    type: 'fairy',
    color: 'black',
    backgroundColor: '#EBB9EA',
  },
  {
    type: 'unknown',
    color: 'white',
    backgroundColor: 'black',
  },
  {
    type: 'shadow',
    color: 'white',
    backgroundColor: '#401d77',
  },
];

export function getBackgroundColor(type) {
  let color = colors.find(c => c.type === type);
  return color ? color.backgroundColor : 'red';
}

export function getColor(type) {
  let color = colors.find(c => c.type === type);
  return color ? color.color : 'red';
}
