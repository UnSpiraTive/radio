/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConfiguereService } from './configuere.service';

describe('ConfiguereService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfiguereService]
    });
  });

  it('should ...', inject([ConfiguereService], (service: ConfiguereService) => {
    expect(service).toBeTruthy();
  }));
});
