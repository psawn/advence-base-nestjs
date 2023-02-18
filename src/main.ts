import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionInterceptor } from './filters';
import { ResponseInterceptor } from './interceptors';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new HttpExceptionInterceptor());

  setupSwagger(app);

  await app.listen(3000);
}
bootstrap();
