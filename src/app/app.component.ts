import { LancamentosService } from './lancamentos/lancamentos.service';
import { Component, OnInit, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable()
export class Lancamentos {

  constructor(private http: HttpClient) { }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {



  constructor(private lancamentoService: LancamentosService) { }

  ngOnInit() {

  }

}
