import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvicebarComponent } from './advicebar.component';

describe('AdvicebarComponent', () => {
  let component: AdvicebarComponent;
  let fixture: ComponentFixture<AdvicebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvicebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvicebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
