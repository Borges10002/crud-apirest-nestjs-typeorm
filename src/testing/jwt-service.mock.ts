import { JwtService } from '@nestjs/jwt';

export const jwtServiceMock = {
  provide: JwtService,
  useValue: {
    sign: jest.fn(),
    verify: jest.fn(),
  },
};
