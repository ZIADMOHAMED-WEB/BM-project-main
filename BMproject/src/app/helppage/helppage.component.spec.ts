import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelppageComponent } from './helppage.component';

describe('HelppageComponent', () => {
  let component: HelppageComponent;
  let fixture: ComponentFixture<HelppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelppageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
