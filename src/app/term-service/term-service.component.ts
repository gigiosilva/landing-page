import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-term-service',
  templateUrl: './term-service.component.html',
  styleUrls: ['./term-service.component.scss']
})
export class TermServiceComponent implements OnInit {
  @Input() link;
  @Output() newLink = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  updateLink(event){
    this.newLink.emit(event);
  }

}
