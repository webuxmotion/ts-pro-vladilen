// const cars: string[] = ['Ford', 'Audi'];
// const cars2: Array<string> = ['Ford', 'Audi'];

// const promise: Promise<number> = new Promise(resolve => {
//   setTimeout(() => {
//     resolve(5)
//   }, 2000);
// });

// const promise = new Promise<number>(resolve => {
//   setTimeout(() => {
//     resolve(5)
//   }, 2000);
// });

// promise.then(data => {
//   console.log(data.toFixed());
// });

// =======================

// function mergeObjects<T extends object, R extends object>(a: T, b: R) {
//   return Object.assign({}, a, b);
// }

// const merged = mergeObjects({name: 'Andrii'}, {age: 29});
// const merged2 = mergeObjects({name: 'Alexandra'}, {age: 24, color: 'pink'});
// console.log(merged2.color);

// const merged3 = mergeObjects({a: 'a'}, 'bbb');

// =======================

// interface ILength {
//   length: number
// }

// function withCount<T extends ILength>(value: T): {value: T, count: string} {
//   return {
//     value,
//     count: `This object has ${value.length} symbols`
//   }
// }
// console.log(withCount('Hi typescript'));
// console.log(withCount(['i', 'am', 'array']));
// console.log(withCount({length: 20}));

// ========================

// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
//   return obj[key];
// }
// const person = {
//   name: 'Andrii',
//   age: 29
// }
// console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'age'));
// console.log(getObjectValue(person, 'job'));

// ========================

// class Collection<T extends number | string | boolean> {
//   constructor(private _items: T[] = []) {}

//   add(item: T) {
//     this._items.push(item);
//   }

//   remove(item: T) {
//     this._items = this._items.filter(i => i !== item);
//   }

//   get items() {
//     return this._items;
//   }
// }

// const strings = new Collection<string>(['i', 'am', 'strings']);
// strings.add('!');
// strings.remove('am');
// console.log(strings.items);

// const numbers = new Collection<number>([2, 5, 6]);

// =================================


// interface Car {
//   model: string
//   year: number
// }

// function createAndValidateCar(model: string, year: number): Car {
//   const car: Partial<Car> = {};

//   if (model.length > 3) {
//     car.model = model;
//   }

//   if (year > 2000) {
//     car.year = year;
//   }

//   return car as Car;
// }

// ====================================

// const cars: Readonly<Array<string>> = ['Ford', 'Audi'];

// const ford: Readonly<Car> = {
//   model: 'Ford',
//   year: 2020
// }

// ford.model = 'Ferrari';