import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

const SESSION_KEY = 'sedeges-demo-session';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly isAuthenticated = signal(sessionStorage.getItem(SESSION_KEY) === 'demo');
  readonly demoMode = true;

  constructor(private readonly router: Router) {}

  /**
   * PROTOTYPE ONLY. Replace with an HTTPS API call before production.
   * Never verify passwords or store password hashes in Angular.
   */
  async login(email: string, password: string): Promise<void> {
    if (!this.demoMode) throw new Error('La autenticación no está configurada.');
    if (!email.trim() || password.length < 8) {
      throw new Error('Introduce un correo y una contraseña válida (mínimo 8 caracteres).');
    }
    sessionStorage.setItem(SESSION_KEY, 'demo');
    this.isAuthenticated.set(true);
    await this.router.navigateByUrl('/dashboard');
  }

  logout(): void {
    sessionStorage.removeItem(SESSION_KEY);
    this.isAuthenticated.set(false);
    void this.router.navigateByUrl('/login');
  }
}
