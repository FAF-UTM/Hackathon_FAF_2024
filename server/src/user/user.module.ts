import { Module } from "@nestjs/common";
import { MongoModule } from "~/common/mongo/mongo.module";
import { UserRepository } from "./repositories/user.repository";
import { OAuthAccountRepository } from "./repositories/oauth-account.repository";

@Module({
  imports: [MongoModule],
  providers: [UserRepository, OAuthAccountRepository],
  exports: [UserRepository, OAuthAccountRepository],
})
export class UserModule {}
