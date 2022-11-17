import { Controller, Get, UseGuards } from '@nestjs/common';
import { Public } from '../shared/decorator/public.decorator';
import { ClientAuthService } from './client.auth.service';
import { AccessTokenAuthGuard } from '../shared/guards/access.token.guard';

@Controller('/client')
export class ClientAuthController {
  constructor(private readonly clientAuthService: ClientAuthService) {}

  @Get('/login')
  sign(): any {
    return this.clientAuthService.generateTokens({
      name: 'ali',
      mobile: '01017431767',
    });
  }

  @UseGuards(AccessTokenAuthGuard)
  @Get('/checkToken')
  checkToken(): { message: string } {
    return { message: 'success' };
  }

  @Public()
  @Get('/public')
  checkPublic(): { message: string } {
    return { message: 'success' };
  }
}
