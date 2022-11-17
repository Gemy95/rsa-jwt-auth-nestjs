import { Module } from '@nestjs/common';
import { ClientAuthService } from '../client/client.auth.service';
import { ClientAuthController } from './client.auth.controller';
import { SharedAuthModule } from '../shared/auth.module';

@Module({
  imports: [SharedAuthModule],
  controllers: [ClientAuthController],
  providers: [ClientAuthService],
  exports: [ClientAuthService],
})
export class ClientAuthModule {}
