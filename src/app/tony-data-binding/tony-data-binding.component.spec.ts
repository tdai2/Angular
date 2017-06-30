import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonyDataBindingComponent } from './tony-data-binding.component';

describe('TonyDataBindingComponent', () => {
  let component: TonyDataBindingComponent;
  let fixture: ComponentFixture<TonyDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonyDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonyDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
