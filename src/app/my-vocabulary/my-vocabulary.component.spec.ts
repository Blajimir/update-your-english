import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVocabularyComponent } from './my-vocabulary.component';

describe('MyVocabularyComponent', () => {
  let component: MyVocabularyComponent;
  let fixture: ComponentFixture<MyVocabularyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVocabularyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
