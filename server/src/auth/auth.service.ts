import { ConflictException, Injectable } from "@nestjs/common";
import { UserRepository } from "~/user/repositories/user.repository";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(user: { name: string; email: string; password: string }) {
    const existingUser = await this.userRepository.findUserByEmail(user.email);
    if (existingUser) {
      throw new ConflictException(
        "User with this email already exists. If this is you, please log in with the method used for signing up",
      );
    }

    const { name, email, password } = user;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    return await this.userRepository.createUser({
      name,
      email,
      passwordHash,
    });
  }

  async validateUser(email: string, password: string) {
    const user = await this.userRepository.findUserByEmail(email);
    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      return null;
    }

    return user;
  }
}
