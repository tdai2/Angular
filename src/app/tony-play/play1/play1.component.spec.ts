import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Play1Component } from './play1.component';

describe('Play1Component', () => {
  let component: Play1Component;
  let fixture: ComponentFixture<Play1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Play1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Play1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
