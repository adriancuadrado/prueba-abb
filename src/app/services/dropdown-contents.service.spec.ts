import { TestBed } from '@angular/core/testing';

import { DropdownContentsService } from './dropdown-contents.service';

describe('DropdownContentsService', () => {
  let service: DropdownContentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownContentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
