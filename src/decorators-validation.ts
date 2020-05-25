type ValidatorType = 'required' | 'email';

interface ValidatorConfig {
  [prop: string]: {
    [validateProp: string]: ValidatorType
  }
}

const validators: ValidatorConfig = {}

function Required(target: any, propName: string) {
  validators[target.constructor.name] = {
    ...validators[target.constructor.name],
    [propName]: 'required'
  }
}

function validate(obj: any): boolean {
  const objConfig = validators[obj.constructor.name];
  if (!objConfig) {
    return true;
  }
  let isValid = true;
  Object.keys(objConfig).forEach(key => {
    if (objConfig[key] === 'required') {
      isValid = isValid && !!obj[key];
    }
  });

  return isValid;
}

// class Form {
//   @Required
//   public email: string | void;

//   @Required
//   public name: string | void;

//   constructor(
//     email?: string,
//     name?: string
//   ) {
//     this.email = email;
//     this.name = name;
//   }
// }

// const form = new Form('andrii@gmail.com', 'Andrii');

// if (validate(form)) {
//   console.log('form valid', form);
// } else {
//   console.log('form not valid', form);
// }