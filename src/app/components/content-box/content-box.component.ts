import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css']
})
export class ContentBoxComponent {
  @Input() color!: string;
  @Input() size!: string;

  constructor(){}
}
