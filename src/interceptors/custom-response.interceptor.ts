import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type dataTypes =
  | Record<string, string | boolean | number | object | []>
  | string;

export class ResponseDto {
  code: number;
  msg: string;
  data: dataTypes;
}

@Injectable()
export class CustomResponseInterceptor implements NestInterceptor<ResponseDto> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseDto> {
    return next.handle().pipe(
      map((data) => {
        return { code: 200, msg: 'OK', data };
      }),
    );
  }
}
