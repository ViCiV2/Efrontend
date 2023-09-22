import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Persona,Alumnos } from 'src/app/interfaces/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrls: ['./agregar-editar-persona.component.css']
})
export class AgregarEditarPersonaComponent implements OnInit {

  tipoDocumento: string[] = ['DNI', 'Libreta Civica', 'Pasaporte'];
  Genero: string[] = ['Masculino', 'Femenino'];
  Region: string[] = ['Valles Centrales', 'Costa','Sierra Norte','Sierra Sur','Cañada', 'Mixteca','Istmo', 'Papaloapan', 'Otro'];
  form: FormGroup;
  maxDate: Date;
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<AgregarEditarPersonaComponent>,
    private fb: FormBuilder, private _personaService: PersonaService, private _snackBar: MatSnackBar) {
      this.maxDate = new Date();
      /*this.form = this.fb.group({
        nombre: ['',Validators.required],
        apellido: ['',Validators.required],
        correo: ['',[Validators.required, Validators.email]],
        tipoDocumento: [null,Validators.required],
        documento: [null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        fechaNacimiento: [null,Validators.required],
      })*/

      this.form = this.fb.group({
        Nombre: ['',Validators.required],
        Edad: [null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        FechaAplicacion: [null,Validators.required],
        Genero:[null,Validators.required],	
        Region:[null,Validators.required],	
        Municipio:[null,Validators.required],	
        CodigoPostal:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],	
        Grupo:[null,Validators.required],
        o1:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],	
        o2:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],	
        o3:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o4:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o5:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o6:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o7:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o8:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o9:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o10:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o11:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o12:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o13:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o14:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o15:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o16:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o17:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o18:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o19:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o20:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o21:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o22:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o23:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o24:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o25:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o26:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o27:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o28:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o29:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o30:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o31:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o32:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o33:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o34:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o35:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o36:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o37:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o38:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o39:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o40:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o41:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o42:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o43:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o44:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o45:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o46:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o47:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o48:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o49:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o50:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o51:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o52:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o53:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o54:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o55:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o56:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o57:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o58:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o59:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o60:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o61:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o62:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o63:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o64:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o65:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o66:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o67:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o68:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o69:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o70:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o71:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o72:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o73:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o74:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o75:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o76:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o77:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o78:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o79:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o80:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o81:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o82:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o83:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o84:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o85:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o86:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o87:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o88:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o89:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o90:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o91:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o92:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o93:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o94:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o95:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o96:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o97:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o98:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o99:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o100:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o101:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o102:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o103:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o104:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o105:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o106:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o107:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o108:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o109:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o110:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o111:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o112:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o113:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o114:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o115:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o116:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o117:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o118:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o119:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o120:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o121:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o122:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
        o123:[null,[Validators.required, Validators.pattern("^[0-9]*$")]],
  
      })
  } 
 
  ngOnInit(): void {
    
  }

  cancelar () {
    this.dialogRef.close(false);
  }

  addEditPersona() {
    /* const nombre = this.form.value.nombre*/
    /*const nombre =this.form.get('nombre')?.value;*/

    if(this.form.invalid){
      return;
    }  

    /*const persona: Persona = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      correo: this.form.value.correo,
      tipoDocumento: this.form.value.tipoDocumento,
      documento: this.form.value.documento,
      fechaNacimiento: this.form.value.fechaNacimiento.toISOString().slice(0,10)
    }*/

    const alumnos: Alumnos = {
      Nombre: this.form.value.Nombre,	
      Edad:this.form.value.Edad,
      FechaAplicacion:this.form.value.FechaAplicacion.toISOString().slice(0,10),
      Genero:this.form.value.Genero,	
      Region:this.form.value.Region,	
      Municipio:this.form.value.Municipio,	
      CodigoPostal:this.form.value.CodigoPostal,	
      Grupo:this.form.value.Grupo,	
      o1:this.form.value.o1,	
      o2:this.form.value.o2,	
      o3:this.form.value.o3,	
      o4:this.form.value.o4,	
      o5:this.form.value.o5,	
      o6:this.form.value.o6,	
      o7:this.form.value.o7,	
      o8:this.form.value.o8,	
      o9:this.form.value.o9,	
      o10:this.form.value.o10,	
      o11:this.form.value.o11,	
      o12:this.form.value.o12,	
      o13:this.form.value.o13,	
      o14:this.form.value.o14,	
      o15:this.form.value.o15,	
      o16:this.form.value.o16,	
      o17:this.form.value.o17,	
      o18:this.form.value.o18,	
      o19:this.form.value.o19,	
      o20:this.form.value.o20,	
      o21:this.form.value.o21,	
      o22:this.form.value.o22,	
      o23:this.form.value.o23,	
      o24:this.form.value.o24,	
      o25:this.form.value.o25,	
      o26:this.form.value.o26,	
      o27:this.form.value.o27,	
      o28:this.form.value.o28,	
      o29:this.form.value.o29,	
      o30:this.form.value.o30,	
      o31:this.form.value.o31,	
      o32:this.form.value.o32,	
      o33:this.form.value.o33,	
      o34:this.form.value.o34,	
      o35:this.form.value.o35,	
      o36:this.form.value.o36,	
      o37:this.form.value.o37,	
      o38:this.form.value.o38,	
      o39:this.form.value.o39,	
      o40:this.form.value.o40,	
      o41:this.form.value.o41,	
      o42:this.form.value.o42,	
      o43:this.form.value.o43,	
      o44:this.form.value.o44,	
      o45:this.form.value.o45,	
      o46:this.form.value.o46,	
      o47:this.form.value.o47,	
      o48:this.form.value.o48,	
      o49:this.form.value.o49,	
      o50:this.form.value.o50,	
      o51:this.form.value.o51,	
      o52:this.form.value.o52,	
      o53:this.form.value.o53,	
      o54:this.form.value.o54,	
      o55:this.form.value.o55,	
      o56:this.form.value.o56,	
      o57:this.form.value.o57,	
      o58:this.form.value.o58,	
      o59:this.form.value.o59,	
      o60:this.form.value.o60,	
      o61:this.form.value.o61,	
      o62:this.form.value.o62,	
      o63:this.form.value.o63,	
      o64:this.form.value.o64,	
      o65:this.form.value.o65,	
      o66:this.form.value.o66,	
      o67:this.form.value.o67,	
      o68:this.form.value.o68,	
      o69:this.form.value.o69,	
      o70:this.form.value.o70,	
      o71:this.form.value.o71,	
      o72:this.form.value.o72,	
      o73:this.form.value.o73,	
      o74:this.form.value.o74,	
      o75:this.form.value.o75,	
      o76:this.form.value.o76,	
      o77:this.form.value.o77,	
      o78:this.form.value.o78,	
      o79:this.form.value.o79,	
      o80:this.form.value.o80,	
      o81:this.form.value.o81,	
      o82:this.form.value.o82,	
      o83:this.form.value.o83,	
      o84:this.form.value.o84,	
      o85:this.form.value.o85,	
      o86:this.form.value.o86,	
      o87:this.form.value.o87,	
      o88:this.form.value.o88,	
      o89:this.form.value.o89,	
      o90:this.form.value.o90,	
      o91:this.form.value.o91,	
      o92:this.form.value.o92,	
      o93:this.form.value.o93,	
      o94:this.form.value.o94,	
      o95:this.form.value.o95,	
      o96:this.form.value.o96,	
      o97:this.form.value.o97,	
      o98:this.form.value.o98,	
      o99:this.form.value.o99,	
      o100:this.form.value.o100,	
      o101:this.form.value.o101,	
      o102:this.form.value.o102,	
      o103:this.form.value.o103,	
      o104:this.form.value.o104,	
      o105:this.form.value.o105,	
      o106:this.form.value.o106,	
      o107:this.form.value.o107,	
      o108:this.form.value.o108,	
      o109:this.form.value.o109,	
      o110:this.form.value.o110,	
      o111:this.form.value.o111,	
      o112:this.form.value.o112,	
      o113:this.form.value.o113,	
      o114:this.form.value.o114,	
      o115:this.form.value.o115,	
      o116:this.form.value.o116,	
      o117:this.form.value.o117,	
      o118:this.form.value.o118,	
      o119:this.form.value.o119,	
      o120:this.form.value.o120,	
      o121:this.form.value.o121,	
      o122:this.form.value.o122,	
      o123:this.form.value.o123
    }

    /*console.log(persona.fechaNacimiento)
    this.loading = true;

    this._personaService.addPersona(persona).subscribe(() => {
      this.loading = false;
      this.mensajeExito();
      this.dialogRef.close(true);
    })*/
    this.loading = true;

    this._personaService.addPersona(alumnos).subscribe(() => {
      this.loading = false;
      this.mensajeExito();
      this.dialogRef.close(true);
    })
    
  }

  mensajeExito() {
    this._snackBar.open('El alumno fue agregado con exito', '', {
      duration: 2000
    });
  }
}
