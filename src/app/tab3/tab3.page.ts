import { Component, OnInit } from '@angular/core';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{

  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];
  generoPeliculas: any[] = [];

  favoritoGenero: any[] = [];

  constructor(
    private dataLocalSrv: DataLocalService,
    private moviesSrv: MoviesService
  ) { }


  async ionViewWillEnter() {

    this.peliculas = await this.dataLocalSrv.cargarFavoritos();
    this.generos = await this.moviesSrv.cargarGeneros();
    this.pelisPorGenero(this.generos, this.peliculas);

  }

  pelisPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]) {

    this.favoritoGenero = [];

    generos.forEach(genero => {

      this.favoritoGenero.push({
        genero: genero.name,
        pelis: peliculas.filter(peli => {
          return peli.genres.find(genre => genre.id === genero.id);
        })
      });
    });

    console.log(this.favoritoGenero);

  }



  // cargarPeliculasEnGeneros() {
  //   this.generos.forEach(generox => {

  //     this.peliculas.forEach(peliculap => {
  //       peliculap.genres.forEach(gp => {
  //         if (generox.id === gp.id) {
  //           this.generoPeliculas.push({peliculas: peliculap});
  //         }
  //       });
  //     });
  //   });
  //   console.log('Peliculas x Genero', this.generoPeliculas);
  // }

}
