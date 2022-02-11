import { TestBed } from '@angular/core/testing';

import { UserTodosService } from './user-todos.service';

describe('UserTodosService', () => {
  let service: UserTodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
