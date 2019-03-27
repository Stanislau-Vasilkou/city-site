import { TestBed, async, inject } from '@angular/core/testing';

import { CardInfoMessageGuard } from './card-info-message.guard';

describe('CardInfoMessageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardInfoMessageGuard]
    });
  });

  it('should ...', inject([CardInfoMessageGuard], (guard: CardInfoMessageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
