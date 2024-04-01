import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExcelService } from '../../services/excel.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  departamento!: string;
  personas: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private excelService: ExcelService) { }

  ngOnInit(): void {
    this.departamento = this.route.snapshot.params['departamento'];
    this.excelService.readExcel().then(
      data => {
        this.personas = data.filter(persona => persona.Departamento === this.departamento);
      },
      error => {
        console.error('Error al leer el archivo Excel:', error);
      }
    );
  }

  verMas(persona: any): void {
    // Comprobar si los parámetros son undefined antes de navegar
    if (persona.Nombre && persona.Departamento && persona.Estatura && persona.Ciudad) {
      // Navegar a la página de detalles con los parámetros proporcionados
      this.router.navigate(['/detalle', persona.Nombre, persona.Departamento, persona.Estatura, persona.Ciudad]);
    } else {
      console.error('Alguno de los parámetros es undefined.');
    }
  }
}
