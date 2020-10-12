import { Component, OnInit } from '@angular/core';
import { Files } from '../../models/files.interface';
import { Router } from '@angular/router';
import { FilesService } from '../../files.service';

@Component({
  selector: 'app-files-dashboard',
  templateUrl: './files-dashboard.component.html',
  styleUrls: ['./files-dashboard.component.css'],
})
export class FilesDashboardComponent implements OnInit {
  files: Files[];

  constructor(private router: Router, private filesService: FilesService) {}

  ngOnInit() {
    this.filesService
      .getFiles()
      .subscribe((data: Files[]) => (this.files = data));
  }
  // goToFile(item: Files) {
  //   this.router.navigate(['/files', item.id]);
  //   // Antoher way to implement aux outlet
  //   this.router.navigate([{ outlets: { auxo: ['file', item.id] } }]);
  // }
}
