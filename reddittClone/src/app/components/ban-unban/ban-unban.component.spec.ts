import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanUnbanComponent } from './ban-unban.component';

describe('BanUnbanComponent', () => {
  let component: BanUnbanComponent;
  let fixture: ComponentFixture<BanUnbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanUnbanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanUnbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
