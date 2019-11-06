import {Component, Input, OnInit} from '@angular/core';
import {MovieModel} from '../models/movie.model';

@Component({
  selector: 'app-movie-details-component',
  templateUrl: './movie-details-component.component.html',
  styleUrls: ['./movie-details-component.component.scss']
})
export class MovieDetailsComponentComponent implements OnInit {
  @Input()
  movieDetails: MovieModel;

  constructor() {
  }

  ngOnInit() {
  }

}
