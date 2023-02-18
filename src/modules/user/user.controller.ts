import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { SignInSchema, SignInSchemaType } from './schemas';
import { CustomValidationPipe } from 'src/transform';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async signIn(
    @Body(new CustomValidationPipe(SignInSchema))
    signInSchema: SignInSchemaType,
  ) {
    return this.userService.signIn(signInSchema);
  }
}
