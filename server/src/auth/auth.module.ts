import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { UserModule } from "~/user/user.module";
import { AuthzModule } from "~/common/authz/authz.module";
import { AuthService } from "./auth.service";

@Module({
  imports: [UserModule, AuthzModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
