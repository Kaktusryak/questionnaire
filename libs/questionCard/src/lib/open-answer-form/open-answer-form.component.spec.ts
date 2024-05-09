import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAnswerFormComponent } from './open-answer-form.component';

describe('OpenAnswerFormComponent', () => {
  let component: OpenAnswerFormComponent;
  let fixture: ComponentFixture<OpenAnswerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenAnswerFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenAnswerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
