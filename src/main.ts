import { enableProdMode, provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router';

// root component
import { App } from './components/app/app';

// core
import { AUTH_PROVIDERS } from './core/auth/providers';
import { TASK_PROVIDERS } from './core/task/providers';
import { BOOK_PROVIDERS } from './core/book/book-providers';

// global less styles
require('!style!css!less!./main.less');


if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}


Firebase.INTERNAL.forceWebSockets();


bootstrap(App, [
  ROUTER_PROVIDERS,
  AUTH_PROVIDERS,
  TASK_PROVIDERS,
  BOOK_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: '/'})
]).catch((error: Error) => console.error(error));
