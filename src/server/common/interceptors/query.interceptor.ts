import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class QueryInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest() as Request;

    /* after executing the handler add missing request query */
    return next.handle().pipe(
      map((data) => {
        return {
          ...request.query,
          ...data,
        };
      }),
    );
  }
}
