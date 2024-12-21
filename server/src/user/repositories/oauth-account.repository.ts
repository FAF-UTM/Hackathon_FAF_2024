import { Injectable } from "@nestjs/common";
import { Db, ObjectId, WithoutId } from "mongodb";
import { MongoService } from "~/common/mongo/mongo.service";
import {
  OAUTH_ACCOUNTS_COLLECTION,
  OAuthAccountEntity,
} from "../entities/oauth-account.entity";

@Injectable()
export class OAuthAccountRepository {
  private readonly db: Db;
  constructor(private readonly mongoService: MongoService) {
    this.db = mongoService.db;
  }

  async findOAuthAccount(provider: string, providerId: string) {
    return this.db
      .collection<OAuthAccountEntity>(OAUTH_ACCOUNTS_COLLECTION)
      .findOne({ provider, providerId });
  }

  async createOAuthAccount(oauthAccount: WithoutId<OAuthAccountEntity>) {
    const result = await this.db
      .collection<WithoutId<OAuthAccountEntity>>(OAUTH_ACCOUNTS_COLLECTION)
      .insertOne(oauthAccount, { noResponse: false });
    return {
      ...oauthAccount,
      _id: result.insertedId,
    };
  }

  async linkOAuthAccountToUser(
    userId: ObjectId,
    oauthAccount: Omit<OAuthAccountEntity, "_id" | "userId">,
  ) {
    return this.db
      .collection<WithoutId<OAuthAccountEntity>>(OAUTH_ACCOUNTS_COLLECTION)
      .insertOne({ ...oauthAccount, userId });
  }
}
