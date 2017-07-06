import { TestBed, inject } from '@angular/core/testing';

import { RrHttpService } from './rr-http.service';

describe('RrHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RrHttpService]
    });
  });

  it('should be created', inject([RrHttpService], (service: RrHttpService) => {
    expect(service).toBeTruthy();
  }));
});
