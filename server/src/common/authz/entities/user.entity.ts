import { ObjectId } from "mongodb";

export const USERS_COLLECTION = "users";

export type UserEntity = {
  _id: ObjectId;
  email?: string;
  /**
   * undefined/null if users have not confirmed their domains
   */
  handle?: string;
  name: string;
};
