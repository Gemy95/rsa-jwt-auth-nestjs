import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { readFileSync } from 'fs';

@Injectable()
export class ClientAuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async generateToken(
    payload: any, //need update
  ): Promise<any> {
    const privateKey = readFileSync(
      `${__dirname}/keys/client.private.key`,
    ).toString(); //this.configService.get('JWT_CLIENT_PRIVATE_KEY'),
    const accessToken = await this.jwtService.sign(payload, {
      secret: privateKey,
      expiresIn: '10h',
      issuer: 'Shoppex',
      subject: 'iam@user.me',
      audience: 'Client',
      algorithm: 'RS256',
    });
    return {
      accessToken,
    };
  }
}
