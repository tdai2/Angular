import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonyPlay1Component } from './tony-play1.component';

describe('TonyPlay1Component', () => {
  let component: TonyPlay1Component;
  let fixture: ComponentFixture<TonyPlay1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonyPlay1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonyPlay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
