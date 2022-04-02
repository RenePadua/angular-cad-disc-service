import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './timer/timer.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { RouterModule } from '@angular/router';
import { TimerService } from './timer.service';
import { DisciplinasService } from './disciplinas.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'timer', component: TimerComponent },
      { path: 'disciplinas', component: DisciplinasComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    TimerComponent,
    DisciplinasComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, DisciplinasService],
})
export class AppModule {}
