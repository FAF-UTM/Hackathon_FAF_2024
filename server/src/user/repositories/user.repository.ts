import { Injectable } from "@nestjs/common";
import { Db, ObjectId, WithoutId } from "mongodb";
import { MongoService } from "~/common/mongo/mongo.service";
import { UserEntity, USERS_COLLECTION } from "../entities/user.entity";

@Injectable()
export class UserRepository {
  private readonly db: Db;
  constructor(private readonly mongoService: MongoService) {
    this.db = mongoService.db;
  }

  async findUserByEmail(email: string) {
    return this.db.collection<UserEntity>(USERS_COLLECTION).findOne({ email });
  }

  async findUserById(userId: ObjectId) {
    return this.db
      .collection<UserEntity>(USERS_COLLECTION)
      .findOne({ _id: userId });
  }

  async createUser(user: Omit<UserEntity, "_id">) {
    const result = await this.db
      .collection<WithoutId<UserEntity>>(USERS_COLLECTION)
      .insertOne(user);
    return {
      ...user,
      _id: result.insertedId,
    };
  }
}
