import { Module } from "@nestjs/common";
import { AuthzService } from "./authz.service";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "~/user/user.module";
import * as dotenv from "dotenv";
dotenv.config();

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: "60m",
      },
    }),
    UserModule,
  ],
  providers: [AuthzService],
  exports: [AuthzService],
})
export class AuthzModule {}
