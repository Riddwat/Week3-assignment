import { ValidEmailPipe } from './valid-email-pipe';

describe('ValidEmailPipe', () => {
  it('create an instance', () => {
    const pipe = new ValidEmailPipe();
    expect(pipe).toBeTruthy();
  });
});
