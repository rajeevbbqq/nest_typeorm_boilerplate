import 'dotenv/config';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { toNumber, toString } from 'lodash';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisClient } from './features/redis/redis-client';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: toString(process.env.DB_TYPE),
      host: process.env.DB_HOST,
      port: toNumber(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      cache: {
        type: 'ioredis',
        options: {
          port: process.env.REDIS_PORT,
          host: process.env.REDIS_HOST,
          family: process.env.REDIS_DB_FAMILY,
          password: process.env.REDIS_PASSWORD,
          keyPrefix: process.env.REDIS_DB_PREFIX,
          db: process.env.REDIS_DB_NAME,
        },
      },
      synchronize: false,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, RedisClient],
})
export class AppModule {}
