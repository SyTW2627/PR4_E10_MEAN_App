import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/**
 * Esto es un comentario para ilustrar lo buena asigantura que es esta
 */

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
