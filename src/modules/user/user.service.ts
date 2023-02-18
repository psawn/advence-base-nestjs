import { ConflictException, Injectable } from '@nestjs/common';
import { SignInSchemaType } from './schemas';
import { UserRepository } from './user.repository';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private prisma: PrismaService,
  ) {}

  async signIn(signInSchema: SignInSchemaType) {
    const { email, password } = signInSchema;

    const existUser = await this.prisma.user.findUnique({ where: { email } });

    if (existUser) {
      throw new ConflictException();
    }

    await this.prisma.user.create({ data: { email, password } });
  }
}
