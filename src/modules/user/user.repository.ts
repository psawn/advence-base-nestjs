import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}
}
