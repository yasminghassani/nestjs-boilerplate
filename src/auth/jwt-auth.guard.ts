// src/auth/jwt-auth.guard.ts
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);

    // 👇 Automatically allow all routes under /auth
    const publicPrefixes = ['/auth', '/docs'];
    if (publicPrefixes.some((prefix) => request.path.startsWith(prefix))) {
      return true;
    }

    if (isPublic) {
      return true;
    }

    return super.canActivate(context);
  }
}
