interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
  return {
    value,
    count: `This object has ${value.length} symbols`
  }
}
console.log(withCount('Hi typescript'));
console.log(withCount(['i', 'am', 'array']));
console.log(withCount({length: 20}));