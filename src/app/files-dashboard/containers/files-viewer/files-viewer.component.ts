import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Files } from '../../models/files.interface';
import { FilesService } from '../../files.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-files-viewer',
  templateUrl: './files-viewer.component.html',
  styleUrls: ['./files-viewer.component.css'],
})
export class FilesViewerComponent implements OnInit {
  file: Files;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filesService: FilesService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((data: Files) => this.filesService.getFile(data.id)))
      .subscribe((data: Files) => (this.file = data));
  }
  // goBack() {
  //   this.router.navigate(['/files']);
  // }
}
