import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dynamic-text',
  templateUrl: './dynamic-text.component.html',
  styleUrls: ['./dynamic-text.component.scss']
})
export class DynamicTextComponent implements OnInit {
  @Input() headings;
  @Input() content;
  @Output() updatedContent = new EventEmitter();
  @Input() title: boolean = false;
  @Input() fillColor: boolean = false;
  fontSelects = ['700', '600', '500', '400', '100'];
  fontSize = ['8px', '10px', '12px', '14px', '18px', '24px', '28px', '32px', '36px', '72px'];
  selectedFont = '100';
  selectedFontSize = '14px';
  constructor() { }

  ngOnInit() {
  }

  handleChange(event){
    this.content.color = event.color.hex;
    this.updatedContent.emit(this.content);
  }

  updateSelect(event){
    this.content.font = event;
    this.updatedContent.emit(this.content);
  }

  updateTitle(event){
    this.content.title = event;
    this.updatedContent.emit(this.content);
  }

  updateDescription(event){
    this.content.description = event;
    this.updatedContent.emit(this.content);
  }

  handleBackgroundColor(event){
    this.content.fillColor = event.color.hex;
    this.updatedContent.emit(this.content);
  }

  updateFontSize(event){
    this.content.fontSize = event;
    this.updatedContent.emit(this.content);
  }

}
