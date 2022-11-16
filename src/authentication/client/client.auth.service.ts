import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ClientAuthService {
  constructor(private jwtService: JwtService) {}

  async generateToken(
    payload: any, //need update
  ): Promise<any> {
    const accessToken = await this.jwtService.sign(payload); // JwtModule assigne keys and options into sign method
    return {
      accessToken,
    };
  }
}
