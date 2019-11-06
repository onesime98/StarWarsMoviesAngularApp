import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCharactersComponentComponent } from './movie-characters-component.component';

describe('MovieCharactersComponentComponent', () => {
  let component: MovieCharactersComponentComponent;
  let fixture: ComponentFixture<MovieCharactersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCharactersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCharactersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
