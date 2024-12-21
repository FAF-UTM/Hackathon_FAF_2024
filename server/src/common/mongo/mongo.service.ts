import { Injectable, OnModuleInit } from "@nestjs/common";
import { Db, MongoClient } from "mongodb";

@Injectable()
export class MongoService implements OnModuleInit {
  private readonly client: MongoClient;
  readonly db: Db;

  constructor() {
    this.client = new MongoClient(process.env.MONGODB_URI);
    this.db = this.client.db(process.env.MONGODB_DB);
  }

  async onModuleInit() {
    await this.client.connect();
  }
}
