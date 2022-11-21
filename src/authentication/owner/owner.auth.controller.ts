import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Public } from '../shared/decorator/public.decorator';
import { OwnerAuthService } from './owner.auth.service';
import { CurrentUser } from '../shared/decorator/user.dcorator';
import { RefreshTokenAuthGuard } from '../shared/guards/refresh.token.guard';

@Controller('/owner')
export class OwnerAuthController {
  constructor(private readonly ownerAuthService: OwnerAuthService) {}

  @Public()
  @Get('/login')
  sign(): any {
    return this.ownerAuthService.generateTokens({
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
    return this.ownerAuthService.refreshTokens(user);
  }
}
