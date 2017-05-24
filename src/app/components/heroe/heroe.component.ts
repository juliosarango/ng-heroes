import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe:Heroe;

  constructor( private activatedRoute:ActivatedRoute,
              private _heroeService:HeroesService) {
    this.activatedRoute.params.subscribe(
      params => {
        this.heroe = _heroeService.getHeroe(params['id']);        
      })
  }



}
