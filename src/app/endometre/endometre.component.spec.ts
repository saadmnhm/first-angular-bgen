import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndometreComponent } from './endometre.component';

describe('EndometreComponent', () => {
  let component: EndometreComponent;
  let fixture: ComponentFixture<EndometreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndometreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndometreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
