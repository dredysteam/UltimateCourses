import { Component, OnInit, Input } from '@angular/core';
import { Files } from '../../models/files.interface';

@Component({
  selector: 'app-files-form',
  templateUrl: './files-form.component.html',
  styleUrls: ['./files-form.component.css'],
})
export class FilesFormComponent implements OnInit {
  @Input() detail: Files;
  constructor() {}

  ngOnInit(): void {}
  handleSubmit(form: Files, valid: boolean) {}
}
