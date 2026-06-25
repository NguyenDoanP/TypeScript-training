function Logger(constructor: Function) {
  console.log(`Class Created: ${constructor.name}`);
}

@Logger
class Person {
  constructor() {
    console.log('Person instance');
  }
}

const p = new Person();
