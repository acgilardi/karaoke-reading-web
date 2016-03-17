import { provide } from 'angular2/core';
import { FIREBASE_BOOKS_URL } from '../../config';
import { AuthService } from '../auth/auth-service';
import { BookService } from './book-service';
import { BookStore } from './book-store';


export const BOOK_PROVIDERS: any[] = [
  provide(BookService, {
    deps: [AuthService],
    useFactory: (auth: AuthService): BookService => {
      return new BookService(new Firebase(`${FIREBASE_BOOKS_URL}/${auth.id}`));
    }
  }),

  provide(BookStore, {
    deps: [AuthService],
    useFactory: (auth: AuthService): BookStore => {
      return new BookStore(new Firebase(`${FIREBASE_BOOKS_URL}/${auth.id}`));
    }
  })
];
