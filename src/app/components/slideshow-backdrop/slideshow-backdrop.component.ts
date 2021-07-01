import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { Peliculas } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() peliculas: Peliculas[] = [];

  slideOpts = {
    slidesPerView: 1.2,
    freeMode: true
  };

  constructor(
    public domSanitizerSrv: DomSanitizer,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

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
