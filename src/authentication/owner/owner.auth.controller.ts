import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Public } from '../shared/decorator/public.decorator';
import { OwnerAuthService } from './owner.auth.service';
import { AccessTokenAuthGuard } from '../shared/guards/access.token.guard';
import { RefreshTokenAuthGuard } from '../shared/guards/refresh.token.guard';
import { CurrentUser } from '../shared/decorator/user.dcorator';

@Controller('/owner')
export class OwnerAuthController {
  constructor(private readonly ownerAuthService: OwnerAuthService) {}

  @Get('/login')
  sign(): any {
    return this.ownerAuthService.generateTokens({
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
    return this.ownerAuthService.refreshTokens(user);
  }
}
