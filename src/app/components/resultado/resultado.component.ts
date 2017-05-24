import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
})
export class ResultadoComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;
  constructor( private activatedRoute:ActivatedRoute, private heroesService:HeroesService ) {
  }

  ngOnInit() {
      this.activatedRoute.params.subscribe(
      params =>  {
        let termino = params['termino'];
        this.heroes = this.heroesService.buscarHeroes(termino);
        this.termino = termino;
      }
    );
  }


}
