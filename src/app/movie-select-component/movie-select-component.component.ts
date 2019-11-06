import {Component, OnInit} from '@angular/core';
import {MovieModel} from '../models/movie.model';
import {HttpClient} from '@angular/common/http';
import {CharacterModel} from '../models/character.model';

@Component({
  selector: 'app-movie-select-component',
  templateUrl: './movie-select-component.component.html',
  styleUrls: ['./movie-select-component.component.scss']
})
export class MovieSelectComponentComponent implements OnInit {
  moviesArray: MovieModel[] = [];
  moviesCharacters: CharacterModel[] = [];
  urlForFilms = 'https://swapi.co/api/films/';
  showDetails = false;
  movieDetail: MovieModel = new MovieModel();

  constructor(private readonly http: HttpClient) {

  }

  ngOnInit() {
    this.getAllMovies();
    // this.getAllCharactersByMovies();

  }

  getAllMovies() {
    this.http.get(this.urlForFilms).subscribe(movies => {
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

    });
  }

  getMoviesDetails(value: string): MovieModel {
    this.showDetails = true;
    this.moviesArray.filter(movie => movie.title === value).map(movieDetailsValue => {
      this.movieDetail = movieDetailsValue;
      // retrieve all characters of movies
      this.getAllCharactersByMovies(value);
    });
    return this.movieDetail;

  }

  getAllCharactersByMovies(movieTitle: string) {

    this.http.get(this.urlForFilms).subscribe(movies => {
      let results: any[];
      results = movies['results'];
      results.forEach(movie => {
        if (movie['title'] === movieTitle) {
          movie['characters'].map(characterRequest => {
            this.http.get(characterRequest).subscribe(movieCharacterInfo => {
              const movieCharacter: CharacterModel = new CharacterModel();
              movieCharacter.name = movieCharacterInfo['name'];
              movieCharacter.birthYear = movieCharacterInfo['birth_year'];
              movieCharacter.eyeColor = movieCharacterInfo['eye_color'];
              movieCharacter.hairColor = movieCharacterInfo['hair_color'];
              movieCharacter.height = movieCharacterInfo['height'];
              movieCharacter.gender = movieCharacterInfo['gender'];
              // console.log(movieCharacter);
              this.moviesCharacters.push(movieCharacter);
            });
            // console.log(characterRequest);
          });
        }
      });
    });
  }

  selectChange() {
    this.showDetails = false;
    this.moviesCharacters = [];

  }
}
