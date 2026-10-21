import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Add the production API's CSRF/session strategy here when the backend is defined.
  return next(req);
};
