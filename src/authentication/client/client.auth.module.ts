import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { JwtClientStrategy } from './client.startegy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientAuthService } from './client.auth.service';
import { readFileSync } from 'fs';
import { ClientAuthController } from './client.controller';

@Module({
  imports: [
    PassportModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const options: JwtModuleOptions = {
          privateKey: readFileSync(
            `${__dirname}/keys/client.private.key`,
          ).toString(), // configService.get('JWT_CLIENT_PRIVATE_KEY'),
          publicKey: readFileSync(
            `${__dirname}/keys/client.private.key`,
          ).toString(), //configService.get('JWT_CLIENT_PUBLIC_KEY'),
          signOptions: {
            expiresIn: '10h',
            issuer: 'Shoppex',
            subject: 'iam@user.me',
            audience: 'Client',
            algorithm: 'RS256',
          },
        };
        return options;
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [ClientAuthController],
  providers: [ClientAuthService, JwtClientStrategy],
  exports: [ClientAuthService, JwtClientStrategy],
})
export class ClientAuthModule {}
