import { Injectable } from '@nestjs/common';

// tslint:disable-next-line: no-var-requires
const Redis = require('ioredis');

@Injectable()
export class RedisClient {
  public client: any;
  constructor() {
    this.client = new Redis({
      port: process.env.REDIS_PORT,
      host: process.env.REDIS_HOST,
      family: process.env.REDIS_DB_FAMILY,
      password: process.env.REDIS_PASSWORD,
      keyPrefix: process.env.REDIS_DB_PREFIX,
      db: process.env.REDIS_DB_NAME,
    });
  }
}
