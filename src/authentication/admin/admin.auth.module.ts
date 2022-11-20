import { Module } from '@nestjs/common';
import { AdminAuthService } from '../admin/admin.auth.service';
import { AdminAuthController } from './admin.auth.controller';
import { SharedAuthModule } from '../shared/auth.module';

@Module({
  imports: [SharedAuthModule],
  controllers: [AdminAuthController],
  providers: [AdminAuthService],
  exports: [AdminAuthService],
})
export class AdminAuthModule {}
