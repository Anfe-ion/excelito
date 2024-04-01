import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExcelService } from '../../services/excel.service';


@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {
  departamentos: string[] = []; // Array para almacenar los departamentos únicos

  constructor(private router: Router, private excelService: ExcelService) { }

  ngOnInit(): void {
    // Llamamos al servicio para leer el archivo Excel y obtener los departamentos únicos
    this.excelService.readExcel().then(
      data => {
        // Obtenemos los departamentos únicos del archivo Excel
        this.departamentos = [...new Set(data.map(persona => persona.Departamento))];
      },
      error => {
        console.error('Error al leer el archivo Excel:', error);
      }
    );
  }

  // Método para redirigir a la página de listado con el departamento seleccionado como parámetro
  navigateToDepartamento(departamento: string): void {
    this.router.navigate(['/listado', departamento]);
  }
}
