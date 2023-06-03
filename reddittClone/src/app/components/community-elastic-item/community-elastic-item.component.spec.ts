import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityElasticItemComponent } from './community-elastic-item.component';

describe('CommunityElasticItemComponent', () => {
  let component: CommunityElasticItemComponent;
  let fixture: ComponentFixture<CommunityElasticItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityElasticItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityElasticItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
