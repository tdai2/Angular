import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonyPlayComponent } from './tony-play.component';

describe('TonyPlayComponent', () => {
  let component: TonyPlayComponent;
  let fixture: ComponentFixture<TonyPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonyPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonyPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
