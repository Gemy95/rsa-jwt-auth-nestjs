import { JwtSignOptions } from '@nestjs/jwt';

export const getJwtModuleOptions = (
  privateKey: string | Buffer,
  algorithm: 'RS256',
  expiresIn?: string | number | undefined,
  issuer?: string | undefined,
  subject?: string | undefined,
  audience?: string | undefined,
): JwtSignOptions => {
  return {
    privateKey,
    expiresIn,
    issuer,
    subject,
    audience,
    algorithm,
  };
};
