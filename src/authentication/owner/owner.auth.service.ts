import { Injectable } from '@nestjs/common';
import { AuthService } from '../shared/auth.service';
import { AuthUserType } from '../shared/constants/auth.types.enum';

@Injectable()
export class OwnerAuthService {
  constructor(private authService: AuthService) {}

  generateTokens(
    payload: any, // need update IClient | IAdmin etc...
  ) {
    return this.authService.generateTokens(AuthUserType.Owner, payload);
  }

  refreshTokens(
    payload: any, // need update IClient | IAdmin etc...
  ) {
    return this.authService.generateTokens(AuthUserType.Owner, payload);
  }
}
