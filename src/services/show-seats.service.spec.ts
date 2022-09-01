import { TestBed } from '@angular/core/testing';

import { ShowSeatsService } from './show-seats.service';

describe('ShowSeatsService', () => {
  let service: ShowSeatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowSeatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
