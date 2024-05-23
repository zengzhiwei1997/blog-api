import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //配置静态资源目录虚拟路径
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/static/',
  });
  await app.listen(3000);
}
bootstrap();
