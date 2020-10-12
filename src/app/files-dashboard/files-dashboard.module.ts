import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
//containers
import { FilesDashboardComponent } from './containers/files-dashboard/files-dashboard.component';
import { FilesViewerComponent } from './containers/files-viewer/files-viewer.component';
//components
import { FilesFormComponent } from './components/files-form/files-form.component';

// services
import { FilesService } from './files.service';
//Topic: Aplicacion de pipes, Auxiliar outlet

//pipes
import { FilesizePipe } from './pipes/filesize.pipe';

const routes: Routes = [
  {
    path: 'files',
    // component: FilesDashboardComponent,
    children: [
      {
        path: '',
        component: FilesDashboardComponent,
      },
      {
        // Declaracion de outlet auxiliar
        path: 'file/:id',
        component: FilesViewerComponent,
        outlet: 'auxo',
      },
    ],
  },
];

@NgModule({
  declarations: [
    FilesDashboardComponent,
    FilesViewerComponent,
    FilesizePipe,
    FilesFormComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [FilesService],
})
export class FilesDashboardModule {}
