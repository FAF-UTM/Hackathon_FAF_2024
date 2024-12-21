import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JWT_STRATEGY, JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [PassportModule.register({ defaultStrategy: JWT_STRATEGY })],
  providers: [JwtStrategy],
  exports: [PassportModule],
})
export class AuthzModule {}
