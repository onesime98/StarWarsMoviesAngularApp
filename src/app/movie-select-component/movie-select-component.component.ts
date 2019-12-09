import {Component, OnInit} from '@angular/core';
import {MovieModel} from '../models/movie.model';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-movie-select-component',
  templateUrl: './movie-select-component.component.html',
  styleUrls: ['./movie-select-component.component.scss']
})
export class MovieSelectComponentComponent implements OnInit {
  moviesArray: MovieModel[] = [];
  urlForFilms = 'https://swapi.co/api/films/';
  showDetails = false;
  movieDetail: MovieModel = new MovieModel();
  loading = true;
  networkAvailable;

  constructor(private readonly http: HttpClient) {

  }

  ngOnInit() {
    this.getAllMovies();
    this.networkAvailable = window.navigator.onLine;
  }

  getAllMovies() {
    this.http.get<any>(this.urlForFilms).pipe(
      map(response => response.results),
      map(results => results.map(resultMovieLine => {
        const movieLineModel: MovieModel = new MovieModel();
        movieLineModel.title = resultMovieLine.title;
        movieLineModel.episodeId = resultMovieLine.episode_id;
        movieLineModel.releaseDate = resultMovieLine.release_date;
        movieLineModel.producer = resultMovieLine.producer;
        movieLineModel.openingCrawl = resultMovieLine.opening_crawl;
        return movieLineModel;
      })),
      tap(() => this.loading = false)
    ).subscribe(movies => this.moviesArray = movies);
     /* .subscribe(movies => {
      let results: any[];
      results = movies['results'];
      results.map(resultMovieLine => {
        const movieLineModel: MovieModel = new MovieModel();
        movieLineModel.title = resultMovieLine.title;
        movieLineModel.episodeId = resultMovieLine.episode_id;
        movieLineModel.releaseDate = resultMovieLine.release_date;
        movieLineModel.producer = resultMovieLine.producer;
        movieLineModel.openingCrawl = resultMovieLine.opening_crawl;
        this.moviesArray.push(movieLineModel);
      });
      this.loading = false;

    });*/
  }

  getMoviesDetails(value: string): MovieModel {
    this.showDetails = true;
    this.moviesArray.filter(movie => movie.title === value).map(movieDetailsValue => {
      this.movieDetail = movieDetailsValue;
    });
    return this.movieDetail;
  }

  selectChange() {
    this.showDetails = false;
  }
}
