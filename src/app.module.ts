import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminAuthModule } from './authentication/admin/admin.auth.module';
import { ClientAuthModule } from './authentication/client/client.auth.module';
import { OwnerAuthModule } from './authentication/owner/owner.auth.module';
import { SharedAuthModule } from './authentication/shared/auth.module';
import { AccessTokenAuthGuard } from './authentication/shared/guards/access.token.guard';
import { RefreshTokenAuthGuard } from './authentication/shared/guards/refresh.token.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    SharedAuthModule,
    ClientAuthModule,
    AdminAuthModule,
    OwnerAuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AccessTokenAuthGuard,
    },
  ],
})
export class AppModule {}
