import { Test, TestingModule } from '@nestjs/testing';
import { RedisClient } from './redis-client';

describe('RedisClient', () => {
  let provider: RedisClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedisClient],
    }).compile();

    provider = module.get<RedisClient>(RedisClient);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
