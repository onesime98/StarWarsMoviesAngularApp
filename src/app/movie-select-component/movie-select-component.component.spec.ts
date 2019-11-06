import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSelectComponentComponent } from './movie-select-component.component';

describe('MovieSelectComponentComponent', () => {
  let component: MovieSelectComponentComponent;
  let fixture: ComponentFixture<MovieSelectComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSelectComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSelectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
