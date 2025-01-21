import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHereditairesComponent } from './test-hereditaires.component';

describe('TestHereditairesComponent', () => {
  let component: TestHereditairesComponent;
  let fixture: ComponentFixture<TestHereditairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHereditairesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestHereditairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
