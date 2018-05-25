import { TestBed, async, inject } from '@angular/core/testing';

import { UnAuthenticationGuard } from './un-authentication.guard';

describe('UnAuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnAuthenticationGuard]
    });
  });

  it('should ...', inject([UnAuthenticationGuard], (guard: UnAuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
