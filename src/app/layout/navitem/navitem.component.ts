import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navitem',
  templateUrl: './navitem.component.html',
  styleUrls: ['./navitem.component.scss']
})
export class NavitemComponent implements OnInit {

  @Input()
  route: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
