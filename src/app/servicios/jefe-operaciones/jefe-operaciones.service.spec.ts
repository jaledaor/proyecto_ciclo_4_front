import { TestBed } from '@angular/core/testing';

import { JefeOperacionesService } from './jefe-operaciones.service';

describe('JefeOperacionesService', () => {
  let service: JefeOperacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JefeOperacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
