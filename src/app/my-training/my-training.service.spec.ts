import { TestBed, inject } from '@angular/core/testing';

import { MyTrainingService } from './my-training.service';

describe('MyTrainingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyTrainingService]
    });
  });

  it('should be created', inject([MyTrainingService], (service: MyTrainingService) => {
    expect(service).toBeTruthy();
  }));
});
