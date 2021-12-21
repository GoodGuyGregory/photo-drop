import { TestBed } from '@angular/core/testing';

import { PhotoshareService } from './photoshare.service';

describe('PhotoshareService', () => {
  let service: PhotoshareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoshareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
