import { Component, OnInit } from '@angular/core';
import { PropostaDeEstagio } from '../proposta-de-estagio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proposta-de-estagio',
  templateUrl: './proposta-de-estagio.component.html',
  styleUrls: ['./proposta-de-estagio.component.css']
})
export class PropostaDeEstagioComponent implements OnInit {
  propostas = null;

  constructor(private proposta$: PropostaDeEstagio, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.proposta$.lista()
      .subscribe(lista => this.propostas = lista);
    }
}
