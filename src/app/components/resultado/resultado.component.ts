import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
})
export class ResultadoComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor( private activatedRoute:ActivatedRoute, heroesService:HeroesService ) {
    this.activatedRoute.params.subscribe(
      params => this.heroes = heroesService.buscarHeroes(params['termino'])
    );    
  }

  ngOnInit() {
  }


}
