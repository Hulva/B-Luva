import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeIndexComponent } from './life-index.component';

describe('LifeIndexComponent', () => {
  let component: LifeIndexComponent;
  let fixture: ComponentFixture<LifeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
