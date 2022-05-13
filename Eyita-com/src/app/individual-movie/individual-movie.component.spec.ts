import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualMovieComponent } from './individual-movie.component';

describe('IndividualMovieComponent', () => {
  let component: IndividualMovieComponent;
  let fixture: ComponentFixture<IndividualMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
