import { TestBed, async, inject } from '@angular/core/testing';

import { EditorInfoMessageGuard } from './editor-info-message.guard';

describe('EditorInfoMessageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorInfoMessageGuard]
    });
  });

  it('should ...', inject([EditorInfoMessageGuard], (guard: EditorInfoMessageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
