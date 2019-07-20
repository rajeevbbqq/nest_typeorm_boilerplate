import { User.Entity } from './user.entity';

describe('User.Entity', () => {
  it('should be defined', () => {
    expect(new User.Entity()).toBeDefined();
  });
});
