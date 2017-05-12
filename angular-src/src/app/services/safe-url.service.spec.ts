/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SafeUrlService } from './safe-url.service';

describe('SafeUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SafeUrlService]
    });
  });

  it('should ...', inject([SafeUrlService], (service: SafeUrlService) => {
    expect(service).toBeTruthy();
  }));
});
