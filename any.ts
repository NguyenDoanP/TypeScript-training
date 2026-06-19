let obj: any = {
  x: 0,
  foo: () => {
    console.log('foo called');
  },
};

obj.foo();
obj.bar = 100;

const n: number = obj.x;

console.log(n);
