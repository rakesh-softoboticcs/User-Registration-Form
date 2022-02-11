import { TestBed } from '@angular/core/testing';

import { HomepageauthGuard } from './homepageauth.guard';

describe('HomepageauthGuard', () => {
  let guard: HomepageauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HomepageauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
