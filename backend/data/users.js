import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: "Justin Delille",
    email: "justin@example.com",
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: "Stevie Ray",
    email: "stevie@example.com",
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
