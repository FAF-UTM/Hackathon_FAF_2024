import { ObjectId } from "mongodb";

export const OAUTH_ACCOUNTS_COLLECTION = "oauth-accounts";

export type OAuthAccountEntity = {
  _id: ObjectId;
  userId: ObjectId;
  /**
   * name of the provider (e.g. instagram, facebook, etc.)
   */
  provider: string;
  /**
   * id provided by the oauth provider
   */
  providerId: string;
  accessToken?: string;
  refreshToken?: string;
  profile?: any;
};
