// Basic Generic Function

function identity<T>(value: T): T {
  return value;
}

const numberResult = identity(100);
const stringResult = identity('Hello');

console.log(numberResult);
console.log(stringResult);

// Generic Interface

interface Box<T> {
  value: T;
}

const userBox: Box<string> = {
  value: 'Nguyen',
};

console.log(userBox);

// Generic Constraint

interface HasLength {
  length: number;
}

function printLength<T extends HasLength>(item: T): T {
  console.log(`Length: ${item.length}`);
  return item;
}

printLength('TypeScript');
printLength([1, 2, 3, 4]);

// Generic Class

class DataStore<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }
}

const store = new DataStore<number>();

store.add(10);
store.add(20);

console.log(store.getAll());
