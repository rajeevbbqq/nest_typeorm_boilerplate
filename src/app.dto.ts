import { IsDefined } from 'class-validator';

export class AuthDto {
  @IsDefined()
  readonly name: string;
}
