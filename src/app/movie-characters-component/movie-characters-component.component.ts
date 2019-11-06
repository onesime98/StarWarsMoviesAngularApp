import {Component, Input, OnInit} from '@angular/core';
import {CharacterModel} from '../models/character.model';

@Component({
  selector: 'app-movie-characters-component',
  templateUrl: './movie-characters-component.component.html',
  styleUrls: ['./movie-characters-component.component.scss']
})
export class MovieCharactersComponentComponent implements OnInit {
  @Input()
  moviesCharactersDetails: CharacterModel[] = [];

  constructor() { }

  ngOnInit() {
  }

}
