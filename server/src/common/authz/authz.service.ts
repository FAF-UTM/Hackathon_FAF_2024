import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserEntity } from "~/user/entities/user.entity";

@Injectable()
export class AuthzService {
  constructor(private readonly jwtService: JwtService) {}

  async generateTokenPair(user: UserEntity) {
    const accessToken = await this.jwtService.signAsync({
      sub: user._id.toHexString(),
      email: user.email,
    });
    // refresh token WIP
    return {
      accessToken,
      refreshToken: "WIP",
    };
  }
}
