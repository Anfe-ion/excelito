import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExcelService } from '../../services/excel.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  persona: any;

  constructor(private route: ActivatedRoute, private excelService: ExcelService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convertir a número
      this.excelService.readExcel().then(
        data => {
          this.persona = this.excelService.getPersonaById(id, data);
          console.log('Persona encontrada:', this.persona);
        },
        error => {
          console.error('Error al leer el archivo Excel:', error);
        }
      );
    });
  }
}

