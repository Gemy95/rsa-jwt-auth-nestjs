import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { readFileSync } from 'fs';

@Injectable()
export class JwtClientStrategy extends PassportStrategy(Strategy, 'JwtClient') {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: readFileSync(
        `${__dirname}/keys/client.public.key`,
      ).toString(), //configService.get('JWT_CLIENT_PUBLIC_KEY'),
      algorithms: ['RS256'],
    });
  }

  async validate(payload: any) {
    // need update
    return payload;
  }
}
