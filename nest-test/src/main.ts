import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception/http-exception.filter';
import { TransformInterceptor } from './core/interceptor/transform/transform.interceptor';
import { ValidationPipe } from './pipe/validation/validation.pipe';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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
  // Swagger
  const options = new DocumentBuilder()
    .addBearerAuth() // 开启 BearerAuth 授权认证
    .setTitle('API 文档')
    .setDescription('API 文档')
    .setTermsOfService('https://docs.nestjs.cn/8/introduction')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  // 设置显示路由
  SwaggerModule.setup('/doc/swagger-api', app, document);
  // 监听端口
  await app.listen(80);
}
bootstrap();
