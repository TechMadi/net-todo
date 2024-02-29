import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CheckCircle2, LucideAngularModule, LucideComponent,Check,Star,MoreHorizontal,Pencil,Trash2,Circle,Plus } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),importProvidersFrom(
    LucideAngularModule.pick({CheckCircle2,LucideComponent,Check,Star,MoreHorizontal,Pencil,Trash2,Circle,Plus}),

  ),




],
  
};
