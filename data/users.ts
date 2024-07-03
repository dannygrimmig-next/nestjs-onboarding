export type RoleOption = 'INTERN' | 'ENGINEER' | 'ADMIN';

export type User = {
  id: number;
  name: string;
  email: string;
  role: RoleOption;
};

export const sampleUsers: User[] = [
  {
    id: 1,
    name: 'danny',
    email: 'danny@next.com',
    role: 'ENGINEER',
  },
  {
    id: 2,
    name: 'itay',
    email: 'itay@next.com',
    role: 'ENGINEER',
  },
  {
    id: 3,
    name: 'nischay',
    email: 'nischay@next.com',
    role: 'ENGINEER',
  },
];
