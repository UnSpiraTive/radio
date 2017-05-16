/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PropositionService } from './proposition.service';

describe('PropositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropositionService]
    });
  });

  it('should ...', inject([PropositionService], (service: PropositionService) => {
    expect(service).toBeTruthy();
  }));
});
