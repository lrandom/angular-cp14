import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'image-preview', component: ImagePreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
