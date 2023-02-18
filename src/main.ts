import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomErrorFilter } from './filters';
import { CustomResponseInterceptor } from './interceptors';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new CustomResponseInterceptor());
  app.useGlobalFilters(new CustomErrorFilter());

  setupSwagger(app);

  await app.listen(3000);
}
bootstrap();
