import { Injectable } from '@nestjs/common';
import { RedisClient } from './features/redis/redis-client';

@Injectable()
export class AppService {
  constructor(private readonly redis: RedisClient) {}

  async getHello(): Promise<string> {
    const keyName = 'some-key';
    const value = 'some value';
    const setRedis = await this.redis.client.set(keyName, value);
    await this.redis.client.expire(keyName, 5000);
    return setRedis;
  }
}
