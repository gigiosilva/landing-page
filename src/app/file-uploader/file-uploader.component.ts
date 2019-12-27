import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  @Input() headings;
  @Output() newImage = new EventEmitter();
  @Input() previousImage;
  @Input() displaySize;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  updateImage(event){
    this.newImage.emit(event);
  }

}
