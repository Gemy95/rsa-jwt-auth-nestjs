import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AccessTokenClientStrategy } from '../client/client.access.token.startegy';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AccessTokenAdminStrategy } from '../admin/admin.access.token.startegy';
import { RefreshTokenClientStrategy } from '../client/client.refresh.token.startegy';
import { RefreshTokenAdminStrategy } from '../admin/admin.refresh.token.startegy';
import { AccessTokenOwnerStrategy } from '../owner/owner.access.token.startegy';
import { RefreshTokenOwnerStrategy } from '../owner/owner.refresh.token.startegy';

@Module({
  imports: [PassportModule, ConfigModule, JwtModule.register({})],
  providers: [
    JwtService,
    AuthService,
    AccessTokenAdminStrategy,
    RefreshTokenAdminStrategy,
    AccessTokenOwnerStrategy,
    RefreshTokenOwnerStrategy,
    AccessTokenClientStrategy,
    RefreshTokenClientStrategy,
  ],
  exports: [JwtService, AuthService],
})
export class SharedAuthModule {}
