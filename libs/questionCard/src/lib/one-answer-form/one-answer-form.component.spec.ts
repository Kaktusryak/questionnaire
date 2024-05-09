import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneAnswerFormComponent } from './one-answer-form.component';

describe('OneAnswerFormComponent', () => {
  let component: OneAnswerFormComponent;
  let fixture: ComponentFixture<OneAnswerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneAnswerFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneAnswerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
