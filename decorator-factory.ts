function Role(role: string) {
  return function (constructor: Function) {
    console.log(`Role assigned: ${role}`);
  };
}

@Role('Admin')
class User {}

const user = new User();
