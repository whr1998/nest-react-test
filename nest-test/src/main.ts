import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception/http-exception.filter';
import { TransformInterceptor } from './core/interceptor/transform/transform.interceptor';
import { ValidationPipe } from './pipe/validation/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 接口前缀
  app.setGlobalPrefix('api');
  // 跨域解决
  app.enableCors();
  // 全局参数校验
  app.useGlobalPipes(new ValidationPipe());
  // 异常过滤
  app.useGlobalFilters(new HttpExceptionFilter());
  // 响应拦截
  app.useGlobalInterceptors(new TransformInterceptor());
  // 监听端口
  await app.listen(80);
}
bootstrap();
