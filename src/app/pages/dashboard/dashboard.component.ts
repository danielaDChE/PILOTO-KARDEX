import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

interface MenuItem { label: string; icon: string; children?: string[]; }

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  readonly activeMenu = signal('Dashboard');
  readonly expanded = signal<string | null>('Kardex de Personal');
  readonly mobileMenuOpen = signal(false);
  readonly menu: MenuItem[] = [
    { label: 'Dashboard', icon: '▦' },
    { label: 'Administración y Seguridad', icon: '◇', children: ['Usuarios y roles', 'Permisos', 'Estructura organizacional', 'Ítems y puestos', 'Configuración'] },
    { label: 'Kardex de Personal', icon: '♙', children: ['Nómina de Personal', 'Expediente del Servidor', 'Vínculo laboral', 'Seguridad Social / CNS', 'Vacaciones y servicios', 'Historial de Comisiones'] },
    { label: 'Recursos Humanos', icon: '▣' },
    { label: 'Control de Personal', icon: '◷', children: ['Marcaciones', 'Boletas y permisos', 'Planillas disciplinarias'] },
    { label: 'Planillas y Remuneraciones', icon: '▤', children: ['Planilla salarial', 'Subsidios y aguinaldos', 'Boletas de pago', 'Reportes CNS'] },
    { label: 'Portal del Servidor Público', icon: '♧' },
    { label: 'Reportes y Auditoría', icon: '▥' }
  ];

  constructor(readonly auth: AuthService) {}

  toggleMobileMenu(): void { this.mobileMenuOpen.update(current => !current); }

  toggle(item: MenuItem): void {
    this.activeMenu.set(item.label);
    if (item.children?.length) this.expanded.update(current => current === item.label ? null : item.label);
  }
  select(label: string): void { this.activeMenu.set(label); }
}
