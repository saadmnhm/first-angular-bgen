import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCliniqueComponent } from './test-clinique.component';

describe('TestCliniqueComponent', () => {
  let component: TestCliniqueComponent;
  let fixture: ComponentFixture<TestCliniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCliniqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCliniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
