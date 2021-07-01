import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  @Input() peliculas : Pelicula[]=[];
  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  };


  constructor(
    public domSanitizerSrv: DomSanitizer,
    private modalCtrl : ModalController
  ) { }

  ngOnInit() {}

  onclick(){
   this.cargarMas.emit();
  }

  async verDetalle(id: number) {
    const modal = await this.modalCtrl.create({
       component: DetalleComponent,
       componentProps: {
         id
       }
     });
     modal.present();
   }

}
