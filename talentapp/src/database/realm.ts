import Realm, { ObjectSchema } from "realm";

export interface IUser {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export const UserSchema: ObjectSchema = {
  name: "User",
  properties: {
    name: { type: "string", default: "" },
    surname: { type: "string", default: "" },
    email: "string",
    password: "string",
  },
};

const schemaVersion = 1;
const migration = (oldRealm: Realm, newRealm: Realm) => {
  if (oldRealm.schemaVersion < schemaVersion) {
    if (oldRealm.schemaVersion === 0) {
      const oldObjects = oldRealm.objects<IUser>("User");
      const newObjects = newRealm.objects<IUser>("User");

      for (let i = 0; i < oldObjects.length; i++) {
        newObjects[i].name = "";
        newObjects[i].surname = "";
      }
    }
  }
};

const realm = new Realm({ schema: [UserSchema], schemaVersion, migration });

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
