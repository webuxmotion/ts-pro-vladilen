// function Log(constructor: Function) {
//   console.log(constructor);
// }

// function Log2(target: any, propName: string | Symbol) {
//   console.log('target', target);
//   console.log(propName);
// }

// function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
//   console.log('target', target);
//   console.log(propName);
//   console.log('descriptor', descriptor);
// }

// @Log
// class Component {

//   @Log2
//   name: string

//   @Log3
//   get componentName() {
//     return this.name;
//   }

//   constructor(name: string) {
//     this.name = name;
//   }

//   @Log3
//   logName(): void {
//     console.log(`Component Name: ${this.name}`);
//   }
// }

// =====================

// interface ComponentDecorator {
//   selector: string
//   template: string
// }

// function Component(config: ComponentDecorator) {
//   return function
//     <T extends { new(...args: any[]): object } >
//   (Constructor: T) {
//     return class extends Constructor {
//       constructor(...args: any[]) {
//         super(...args);

//         const el = document.querySelector(config.selector)!;
//         el.innerHTML = config.template;
//       }
//     }
//   }
// }

// function Bind(_: any, __: any, descriptor: PropertyDescriptor): PropertyDescriptor {
//   const original = descriptor.value;

//   return {
//     configurable: true,
//     enumerable: false,
//     get() {
//       return original.bind(this);
//     }
//   }
// }

// @Component({
//   selector: '#card',
//   template: `
//     <div class="card">
//       <div class="card-content">
//         <span class="card-title">Component</span>
//       </div>
//     </div>
//   `
// })
// class CardComponent {
//   constructor(public name: string) {
//     this.name = name;
//   }

//   @Bind
//   logName(): void {
//     console.log(`Component Name: ${this.name}`);
//   }
// }

// const card = new CardComponent('Card Componenttt');

// const button = document.querySelector('#btn')!;
// button.addEventListener('click', card.logName);

// ================
