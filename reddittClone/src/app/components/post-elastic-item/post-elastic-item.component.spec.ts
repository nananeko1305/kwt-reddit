import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostElasticItemComponent } from './post-elastic-item.component';

describe('PostElasticItemComponent', () => {
  let component: PostElasticItemComponent;
  let fixture: ComponentFixture<PostElasticItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostElasticItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostElasticItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
