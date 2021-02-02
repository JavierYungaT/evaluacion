import { TestBed } from '@angular/core/testing';

import { TuristicoService } from './turistico.service';

describe('TuristicoService', () => {
  let service: TuristicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuristicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
