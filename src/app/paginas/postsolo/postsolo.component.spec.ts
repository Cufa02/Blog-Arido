import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsoloComponent } from './postsolo.component';

describe('PostsoloComponent', () => {
  let component: PostsoloComponent;
  let fixture: ComponentFixture<PostsoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
