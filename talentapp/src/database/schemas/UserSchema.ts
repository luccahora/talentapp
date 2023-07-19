export const UserSchema = {
  name: "user",
  properties: {
    _id: "string",
    name: "string",
    email: "string",
    passowrd: "string",
    confirmPassword: "string",
  },
  primaryKey: "_id",
};
