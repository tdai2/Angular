import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Play3Component } from './play3.component';

describe('Play3Component', () => {
  let component: Play3Component;
  let fixture: ComponentFixture<Play3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Play3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Play3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
