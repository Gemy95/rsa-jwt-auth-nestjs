import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientAuthModule } from './authentication/client/client.auth.module';
import { SharedAuthModule } from './authentication/shared/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    SharedAuthModule,
    ClientAuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
