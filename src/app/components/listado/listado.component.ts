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
        console.log('Nombres:', this.personas.map(persona => persona.Nombre));
      },
      error => {
        console.error('Error al leer el archivo Excel:', error);
      }
    );
  }

  verMas(id: any): void {
    this.router.navigate(['/detalle', id]);
  }
}
