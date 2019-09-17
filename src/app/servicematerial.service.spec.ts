import { TestBed } from '@angular/core/testing';

import { ServicematerialService } from './servicematerial.service';

describe('ServicematerialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicematerialService = TestBed.get(ServicematerialService);
    expect(service).toBeTruthy();
  });
});
