import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExcelService } from '../../services/excel.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss'
})
export class ListadoComponent implements OnInit {

  filtroBusqueda: string = "" //Para la barra de busqueda
  asociadosFiltrados: any
  asociados: any
  primerasCoincidencias: any[] = [];

  departamentos: string[] = []; // Array para almacenar los departamentos únicos

  constructor(private route: ActivatedRoute,
    private router: Router,
    private excelService: ExcelService) { }

  ngOnInit(): void {
    /* Llamamos al servicio para leer el archivo Excel y obtener los departamentos,
    con el mapeo se obtendrá solo uno, es decir, no se deben traer datos repetidos
    independiente del número de veces que se repitan en db.*/

    this.excelService.readExcel().then(
      data => {
        this.asociados = data;
        // Obtenemos los departamentos únicos del archivo Excel
        this.departamentos = [...new Set(data.map(asociado => asociado.departamento1))];
        /* console.log(this.departamentos) */
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

  
  buscar(): void {
    // Filtrar los asociados según el texto de búsqueda
    this.asociadosFiltrados = this.asociados.filter((asociado: any) =>
      (asociado.nombre && asociado.nombre.toLowerCase().includes(this.filtroBusqueda.toLowerCase())) ||
      (asociado.codigoAsociado && asociado.codigoAsociado.toString().includes(this.filtroBusqueda)) ||
      (asociado.hacienda1 && asociado.hacienda1.toLowerCase().includes(this.filtroBusqueda.toLowerCase())) ||
      (asociado.hacienda2 && asociado.hacienda2.toLowerCase().includes(this.filtroBusqueda.toLowerCase())) ||
      (asociado.hacienda3 && asociado.hacienda3.toLowerCase().includes(this.filtroBusqueda.toLowerCase())) ||
      (asociado.departamento1 && asociado.departamento1.toLowerCase().includes(this.filtroBusqueda.toLowerCase())) ||
      (asociado.tipoGanado && asociado.tipoGanado.toLowerCase().includes(this.filtroBusqueda.toLowerCase()))
    );
  }

}
