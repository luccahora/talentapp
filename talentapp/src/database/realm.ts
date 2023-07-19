import Realm from "realm";

export interface IUser {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export const UserSchema = {
  name: "User",
  properties: {
    name: "string",
    surname: "string",
    email: "string",
    password: "string",
  },
};

const realm = new Realm({ schema: [UserSchema] });

export const createUser = (
  email: string,
  password: string,
  surname: string,
  name: string
) => {
  realm.write(() => {
    realm.create("User", { email, password, surname, name });
  });
};

export const findUserByEmail = (email: string): IUser | null => {
  const user = realm.objects<IUser>("User").filtered(`email = "${email}"`)[0];
  return user ? (user as IUser) : null;
};

export default realm;
