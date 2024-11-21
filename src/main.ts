import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.ts";
import "@nestjs/platform-express";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
  );
  const PORT = 3000;
  await app.listen(
    3000,
    "0.0.0.0",
  );

  Logger.log(`🚀 Application is running on: http://localhost:${PORT}/`);
}

bootstrap();
