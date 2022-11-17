import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Public } from '../shared/decorator/public.decorator';
import { ClientAuthService } from './client.auth.service';
import { AccessTokenAuthGuard } from '../shared/guards/access.token.guard';
import { RefreshTokenAuthGuard } from '../shared/guards/refresh.token.guard';
import { CurrentUser } from '../shared/decorator/user.dcorator';

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
  @Post('/checkToken')
  checkToken(): { message: string } {
    return { message: 'success' };
  }

  @Public()
  @Get('/public')
  checkPublic(): { message: string } {
    return { message: 'success' };
  }

  @UseGuards(RefreshTokenAuthGuard)
  @Post('refresh')
  refreshTokens(@CurrentUser() user: any) {
    return this.clientAuthService.refreshTokens(user);
  }
}
