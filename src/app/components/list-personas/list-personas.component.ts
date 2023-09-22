import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona';
import { AgregarEditarPersonaComponent } from '../agregar-editar-persona/agregar-editar-persona.component';
import { PersonaService } from 'src/app/services/persona.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ListDatosBrutosComponent } from '../list-datos-brutos/list-datos-brutos.component';
import * as XLSX from 'xlsx';





@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['acciones','Nombre', 'Edad', 'FechaAplicacion', 'Genero', 'Region', 'Municipio','CodigoPostal','Grupo',
  'o1','o2','o3','o4','o5','o6','o7','o8','o9','o10','o11','o12','o13','o14','o15','o16','o17','o18','o19','o20',
  'o21','o22','o23','o24','o25','o26','o27','o28','o29','o30','o31','o32','o33','o34','o35','o36','o37','o38','o39','o40',
  'o41','o42','o43','o44','o45','o46','o47','o48','o49','o50','o51','o52','o53','o54','o55','o56','o57','o58','o59','o60',
  'o61','o62','o63','o64','o65','o66','o67','o68','o69','o70','o71','o72','o73','o74','o75','o76','o77','o78','o79','o80',
  'o81','o82','o83','o84','o85','o86','o87','o88','o89','o90','o91','o92','o93','o94','o95','o96','o97','o98','o99','o100',
  'o101','o102','o103','o104','o105','o106','o107','o108','o109','o110','o111','o112','o113','o114','o115','o116','o117','o118','o119','o120',
  'o122','o123'];
  dataSource: MatTableDataSource<Persona>;
  loading: boolean =false;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  router: any;

  constructor(public dialog: MatDialog, private _personaService: PersonaService, private _snackBar: MatSnackBar){
    this.dataSource = new MatTableDataSource();

  }

  ngOnInit(): void {
    this.obtenerPersonas();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'items por pagina';
    this.dataSource.sort = this.sort;
  }

  obtenerPersonas(){
    this.loading = true;

    this._personaService.getPersonas().subscribe(data => {
      console.log(data);
      this.loading=false;
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = 'items por pagina';
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addEditPersona(){
    const dialogRef = this.dialog.open(AgregarEditarPersonaComponent, {
      width: '550px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.obtenerPersonas();
      }
    });

  }

  goDatosBrutos(){
    const dialogRef = this.dialog.open(ListDatosBrutosComponent, {
      width: '550px',
      disableClose: true
    });;
  }

  deletePersona(id: number){
    this.loading=true;
    this._personaService.deletePersonas(id).subscribe(() => {
      this.obtenerPersonas();
      this.mensajeExito();
    })
  }

  mensajeExito() {
    this._snackBar.open('La persona fue eliminada con exito', '', {
      duration: 2000
    });
  }

  exportToExcel(): void {
    const table = document.getElementById('tabla'); // se Reemplaza 'tuTablaId' con el ID de tu tabla
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Hoja1'); // 'Hoja1' es el nombre de la hoja
  
    /* Guarda el archivo Excel */
    XLSX.writeFile(wb, 'archivo_excel.xlsx');
  }
  
}
