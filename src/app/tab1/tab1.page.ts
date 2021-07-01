import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Peliculas } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  peliculasRecientes: Peliculas[]=[];
  populares: Peliculas[]=[];

 

  constructor(
    private moviesService: MoviesService,
    public domSanitizerSrv: DomSanitizer
  ) { }

  ngOnInit() {

    this.moviesService.getFeatures().subscribe(resp => {
      //console.log('resp', resp);
      this.peliculasRecientes= resp.results;
    });

   this.getPopulares();

  }

  cargrMas(){

    this.getPopulares();

  }

  getPopulares(){
    this.moviesService.getPopulares().subscribe(resp =>{
      //console.log('Populares', resp);
      const arrTemp = [...this.populares, ...resp.results];
      this.populares = arrTemp;
    });

  }

}
