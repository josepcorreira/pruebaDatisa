import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNeoComponent } from './view-neo.component';

describe('ViewNeoComponent', () => {
  let component: ViewNeoComponent;
  let fixture: ComponentFixture<ViewNeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
