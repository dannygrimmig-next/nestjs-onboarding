export type RoleOption = 'INTERN' | 'ENGINEER' | 'ADMIN';

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: RoleOption;
};

export const sampleUsers: User[] = [
  {
    id: 1,
    name: 'danny',
    email: 'danny@next.com',
    password: 'testytester',
    role: 'ENGINEER',
  },
  {
    id: 2,
    name: 'itay',
    email: 'itay@next.com',
    password: 'testytester',
    role: 'ENGINEER',
  },
  {
    id: 3,
    name: 'nischay',
    email: 'nischay@next.com',
    password: 'testytester',
    role: 'ENGINEER',
  },
];
