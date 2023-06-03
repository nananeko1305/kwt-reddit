import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityElasticListComponent } from './community-elastic-list.component';

describe('CommunityElasticListComponent', () => {
  let component: CommunityElasticListComponent;
  let fixture: ComponentFixture<CommunityElasticListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityElasticListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityElasticListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
