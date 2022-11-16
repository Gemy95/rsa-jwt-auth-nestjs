import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientAuthModule } from './authentication/client/client.auth.module';

@Module({
  imports: [ClientAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
