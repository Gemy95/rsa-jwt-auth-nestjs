import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Public } from '../shared/decorator/public.decorator';
import { AdminAuthService } from './admin.auth.service';
import { AccessTokenAuthGuard } from '../shared/guards/access.token.guard';
import { RefreshTokenAuthGuard } from '../shared/guards/refresh.token.guard';
import { CurrentUser } from '../shared/decorator/user.dcorator';

@Controller('/admin')
export class AdminAuthController {
  constructor(private readonly adminAuthService: AdminAuthService) {}

  @Get('/login')
  sign(): any {
    return this.adminAuthService.generateTokens({
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
    return this.adminAuthService.refreshTokens(user);
  }
}
