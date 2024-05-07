import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionCardListComponent } from './questionCardList.component';

describe('QuestionCardListComponent', () => {
  let component: QuestionCardListComponent;
  let fixture: ComponentFixture<QuestionCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionCardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
