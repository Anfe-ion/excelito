import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  persona: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.persona = {
        Nombre: params['nombre'],
        Departamento: params['departamento'],
        Estatura: params['estatura'],
        Ciudad: params['ciudad']
      };
    });
  }
}
