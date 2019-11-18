import {Component, Input, OnInit} from '@angular/core';
import {MovieModel} from '../models/movie.model';
import {CharacterModel} from '../models/character.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-movie-details-component',
  templateUrl: './movie-details-component.component.html',
  styleUrls: ['./movie-details-component.component.scss']
})
export class MovieDetailsComponentComponent implements OnInit {
  @Input()
  movieDetails: MovieModel;
  moviesCharacters: CharacterModel[] = [];
  showCharacters = false;
  urlForFilms = 'https://swapi.co/api/films/';

  constructor(private readonly http: HttpClient) {
  }

  ngOnInit() {
  }

  getAllCharactersByMovies(movieTitle: string) {
    this.showCharacters = true;
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
              this.moviesCharacters.push(movieCharacter);
            });
          });
        }
      });
      this.showCharacters = false;
    });
  }

}
