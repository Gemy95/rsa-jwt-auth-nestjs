import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Public } from '../shared/decorator/public.decorator';
import { ClientAuthService } from './client.auth.service';
import { CurrentUser } from '../shared/decorator/user.dcorator';
import { RefreshTokenAuthGuard } from '../shared/guards/refresh.token.guard';

@Controller('/client')
export class ClientAuthController {
  constructor(private readonly clientAuthService: ClientAuthService) {}

  @Public()
  @Get('/login')
  sign(): any {
    return this.clientAuthService.generateTokens({
      name: 'ali',
      mobile: '01017431767',
    });
  }

  @Post('/checkToken')
  checkToken(): { message: string } {
    return { message: 'success' };
  }

  @Public()
  @Get('/public')
  checkPublic(): { message: string } {
    return { message: 'success' };
  }

  @Public()
  @UseGuards(RefreshTokenAuthGuard)
  @Post('refresh')
  refreshTokens(@CurrentUser() user: any) {
    return this.clientAuthService.refreshTokens(user);
  }
}
