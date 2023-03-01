import { Component, Input, OnInit } from '@angular/core';
import { INoticia } from '../interfaces/INoticia';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {
  @Input() noticia?: INoticia
  constructor() { }

  ngOnInit(): void {
  }

}
