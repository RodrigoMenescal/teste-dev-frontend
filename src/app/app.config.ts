import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideEnvironmentNgxMask} from "ngx-mask";
import {provideHttpClient} from "@angular/common/http";
import {API_URL} from "./app.tokens";
import {environment} from "../environments/environment";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideEnvironmentNgxMask(),
    provideHttpClient(),
    { provide: API_URL, useValue: environment.apiUrl }
  ]
};
