import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
} from "@nestjs/common";
import { RegisterRequest } from "./payloads/register.request";
import { AuthService } from "./auth.service";
import { AuthzService } from "~/common/authz/authz.service";
import { LoginRequest } from "./payloads/login.request";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly authzService: AuthzService,
  ) {}

  @Post("register")
  async register(@Body() register: RegisterRequest) {
    const user = await this.authService.createUser(register);
    const tokenPair = await this.authzService.generateTokenPair(user);
    return tokenPair;
  }

  @Post("login")
  @HttpCode(200)
  async login(@Body() { email, password }: LoginRequest) {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new BadRequestException(
        "Email or password wrong or user does not exist",
      );
    }

    const tokenPair = await this.authzService.generateTokenPair(user);
    return tokenPair;
  }
}
