import { add, subtract } from './modules-math';
import type { User } from './modules-types';

const result = add(5, 10);

console.log(result);

const user: User = {
  id: 1,
  name: 'Nguyen',
};

console.log(user);
