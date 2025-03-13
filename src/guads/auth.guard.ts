import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    // Verifica se o token de autorização existe no header
    if (!authorization) {
      return false;
    }

    try {
      const auth = authorization.split(' ')[1];

      if (!auth) {
        return false;
      }

      // Tenta verificar o token usando o AuthService
      const data = this.authService.checkToken(auth);

      request.user = await this.userService.show(data.id);

      // Salva os dados do token no request para serem usados mais tarde
      request.tokenPayload = data;

      return true; // Permite a requisição prosseguir
    } catch (error) {
      console.log('Error in AuthGuard:', error);
      return false; // Retorna false se ocorrer um erro
    }
  }
}
