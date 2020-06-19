import { Component, OnInit } from '@angular/core';
import { PropostaDeEstagio } from '../proposta-de-estagio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-estagio',
  templateUrl: './detalhes-estagio.component.html',
  styleUrls: ['./detalhes-estagio.component.css']
})
export class DetalhesEstagioComponent implements OnInit {
  proposta = null;

  constructor(private proposta$: PropostaDeEstagio, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.proposta$.get(params.get('id'))
        .subscribe(proposta => this.proposta = proposta);
        });
    }
}
