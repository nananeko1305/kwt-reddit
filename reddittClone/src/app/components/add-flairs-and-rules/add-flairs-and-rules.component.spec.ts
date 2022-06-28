import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlairsAndRulesComponent } from './add-flairs-and-rules.component';

describe('AddFlairsAndRulesComponent', () => {
  let component: AddFlairsAndRulesComponent;
  let fixture: ComponentFixture<AddFlairsAndRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlairsAndRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFlairsAndRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
