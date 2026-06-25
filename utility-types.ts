interface User {
  id: number;
  name: string;
  email?: string;
}

// Partial

type UserUpdate = Partial<User>;

const updateUser: UserUpdate = {
  name: 'John',
};

// Required

type FullUser = Required<User>;

const fullUser: FullUser = {
  id: 1,
  name: 'John',
  email: 'john@example.com',
};

// Readonly

const readonlyUser: Readonly<User> = {
  id: 1,
  name: 'Alice',
};

// readonlyUser.name = "Bob"; // Error

// Pick

type UserSummary = Pick<User, 'id' | 'name'>;

const summary: UserSummary = {
  id: 1,
  name: 'Alice',
};

// Omit

type UserWithoutEmail = Omit<User, 'email'>;

const userNoEmail: UserWithoutEmail = {
  id: 2,
  name: 'Bob',
};

// Record

type Roles = 'admin' | 'user';

const permissions: Record<Roles, boolean> = {
  admin: true,
  user: false,
};

// Exclude

type Status = 'pending' | 'success' | 'error';

type FinalStatus = Exclude<Status, 'pending'>;

// ReturnType

function getUser() {
  return {
    id: 1,
    name: 'Alice',
  };
}

type UserType = ReturnType<typeof getUser>;

// Awaited

async function fetchData() {
  return {
    title: 'TypeScript',
  };
}

type FetchResult = Awaited<ReturnType<typeof fetchData>>;
