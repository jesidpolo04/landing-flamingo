import { Component, OnInit } from '@angular/core';
import Aliado from './modelos/Aliado';
import Categoria from './modelos/Categoria';
import Cliente from './modelos/Cliente';
import { AliadosService } from './servicios/aliados.service';
import { AutenticacionService } from './servicios/autenticacion.service';
import { CategoriasService } from './servicios/categorias.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'landing';
  items = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12];
  items2 = [1, 2, 3, 4, 5, 6, 7];
  items3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  customOptions: OwlOptions = {
    responsiveRefreshRate: 400,
    loop: true,
    margin: 10,
    center: false,
    animateOut: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav: true,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 3,
      },
      500: {
        items: 4,
      },
      720: {
        items: 6,
      },
      1000: {
        items: 7,
      },
      1250: {
        items: 9,
      },
      1600: {
        items: 10,
      },
    },
  };
  categoriaAliadoCarrusel: OwlOptions = {
    responsiveRefreshRate: 400,
    loop: false,
    margin: 0,
    center: false,
    animateOut: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dotsEach: true,
    navSpeed: 700,
    nav: true,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 2,
      },
      500: {
        items: 3,
      },
      720: {
        items: 4,
      },
      1000: {
        items: 5,
      },
      1500: {
        items: 5,
      },
      1800: {
        items: 7,
      },
    },
  };
  nuestrosAliadosCarrusel: OwlOptions = {
    responsiveRefreshRate: 400,
    loop: false,
    margin: 0,
    slideBy: 2,
    center: false,
    animateOut: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dotsEach: true,
    navSpeed: 700,
    nav: true,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 2,
      },
      500: {
        items: 3,
      },
      720: {
        items: 4,
      },
      1000: {
        items: 8,
      },
      1500: {
        items: 8,
      },
      1800: {
        items: 8,
      },
    },
  };

  constructor(
    private servicioAutenticacion: AutenticacionService,
    private servicioAliados: AliadosService,
    private servicioCategorias: CategoriasService,
    private modalService: NgbModal
  ) {
    //this.servicioAutenticacion.autenticarse();
  }

  ngOnInit(): void {}

  open(content: any) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        modalDialogClass: 'flamingo-modal',
      })
      .result.then(
        (result) => {},
        (reason) => {}
      );
  }
}
