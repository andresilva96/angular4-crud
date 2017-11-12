import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

declare let $;

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input()
  color = 'success';

  @Input()
  close = null;

  @Input()
  timeout = null;
  constructor() { }

  @ViewChild('divAlert')
  divAlert: ElementRef;

  ngOnInit() {
    if (this.timeout) {
      setTimeout(() => {
        $(this.divAlert.nativeElement).alert('close');
      }, this.timeout);
    }
  }

}
