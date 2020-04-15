import { TestBed } from '@angular/core/testing';

import { DemoServiceService } from './demo-service.service';

describe('DemoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoServiceService = TestBed.get(DemoServiceService);
    expect(service).toBeTruthy();
  });
});
