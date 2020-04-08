import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { ListNoteComponent } from './list-note/list-note.component';
import { AtmComponent } from './atm/atm.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent, outlet: "test" },
  { path: 'image-preview', component: ImagePreviewComponent },
  { path: 'list-note', component: ListNoteComponent },
  { path: 'atm', component: AtmComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
