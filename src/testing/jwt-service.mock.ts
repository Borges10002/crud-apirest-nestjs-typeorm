import { JwtService } from '@nestjs/jwt';

import { jwtPayload } from './jwt.payload.mock';
import { accessToken } from './access-token.mock';

export const jwtServiceMock = {
  provide: JwtService,
  useValue: {
    sign: jest.fn().mockReturnValue(accessToken),
    verify: jest.fn().mockReturnValue(jwtPayload),
  },
};
