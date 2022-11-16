import { Controller, Get, UseGuards } from '@nestjs/common';
import { Public } from '../../decorator/public.decorator';
import { ClientAuthService } from './client.auth.service';
import { JwtClientAuthGuard } from './client.guard';

@Controller('/client')
export class ClientAuthController {
  constructor(private readonly clientAuthService: ClientAuthService) {}

  @Get('/login')
  sign(): Promise<any> {
    return this.clientAuthService.generateToken({
      name: 'ali',
      mobile: '01017431767',
    });
  }

  @UseGuards(JwtClientAuthGuard)
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
