import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaiNeoComponent } from './detai-neo.component';

describe('DetaiNeoComponent', () => {
  let component: DetaiNeoComponent;
  let fixture: ComponentFixture<DetaiNeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaiNeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaiNeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
