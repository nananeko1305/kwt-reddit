import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostElasticListComponent } from './post-elastic-list.component';

describe('PostElasticListComponent', () => {
  let component: PostElasticListComponent;
  let fixture: ComponentFixture<PostElasticListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostElasticListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostElasticListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
