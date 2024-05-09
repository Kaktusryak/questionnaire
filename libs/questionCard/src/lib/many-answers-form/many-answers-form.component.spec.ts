import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyAnswersFormComponent } from './many-answers-form.component';

describe('ManyAnswersFormComponent', () => {
  let component: ManyAnswersFormComponent;
  let fixture: ComponentFixture<ManyAnswersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManyAnswersFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManyAnswersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
