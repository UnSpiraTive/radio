/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SlaidshowService } from './slaidshow.service';

describe('SlaidshowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlaidshowService]
    });
  });

  it('should ...', inject([SlaidshowService], (service: SlaidshowService) => {
    expect(service).toBeTruthy();
  }));
});
