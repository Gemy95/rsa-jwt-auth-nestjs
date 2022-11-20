import { Module } from '@nestjs/common';
import { OwnerAuthService } from '../owner/owner.auth.service';
import { OwnerAuthController } from './owner.auth.controller';
import { SharedAuthModule } from '../shared/auth.module';

@Module({
  imports: [SharedAuthModule],
  controllers: [OwnerAuthController],
  providers: [OwnerAuthService],
  exports: [OwnerAuthService],
})
export class OwnerAuthModule {}
