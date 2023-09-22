import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Componentes
import { AppComponent } from './app.component';
import { ListPersonasComponent } from './components/list-personas/list-personas.component';
import { AgregarEditarPersonaComponent } from './components/agregar-editar-persona/agregar-editar-persona.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ListDatosBrutosComponent } from './components/list-datos-brutos/list-datos-brutos.component';



@NgModule({
  declarations: [
    AppComponent,
    ListPersonasComponent,
    AgregarEditarPersonaComponent,
    ListDatosBrutosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
