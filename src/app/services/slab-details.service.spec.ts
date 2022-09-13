import { TestBed } from '@angular/core/testing';

import { SlabDetailsService } from './slab-details.service';

describe('SlabDetailsService', () => {
  let service: SlabDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlabDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
