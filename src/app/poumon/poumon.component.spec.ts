import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoumonComponent } from './poumon.component';

describe('PoumonComponent', () => {
  let component: PoumonComponent;
  let fixture: ComponentFixture<PoumonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoumonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoumonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
