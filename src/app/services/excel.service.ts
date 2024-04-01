import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  // Método para leer el archivo Excel
  public readExcel(): Promise<any[]> {
    const filePath = 'assets/ptas.xlsx'; // Ruta del archivo Excel en la carpeta assets

    return new Promise((resolve, reject) => {
      fetch(filePath)
        .then(response => response.arrayBuffer())
        .then(data => {
          const workbook: XLSX.WorkBook = XLSX.read(new Uint8Array(data), { type: 'array' });
          const sheetName: string = workbook.SheetNames[0]; // Obtenemos el nombre de la primera hoja
          const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName]; // Obtenemos la primera hoja
          const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, { raw: true });

          console.log('Datos leídos del archivo Excel:', jsonData); // Agregar console.log() para imprimir los datos leídos
          
          resolve(jsonData); // Resolvemos la promesa con los datos leídos
        })
        .catch(error => {
          console.error('Error al leer el archivo Excel:', error); // Manejo de errores
          reject(error); // Rechazamos la promesa en caso de error
        });
    });
  }
}
