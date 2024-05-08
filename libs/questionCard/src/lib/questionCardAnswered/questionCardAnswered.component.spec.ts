import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionCardAnsweredComponent } from './questionCardAnswered.component';

describe('QuestionCardAnsweredComponent', () => {
  let component: QuestionCardAnsweredComponent;
  let fixture: ComponentFixture<QuestionCardAnsweredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionCardAnsweredComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionCardAnsweredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
