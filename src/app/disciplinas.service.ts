import { Injectable } from '@angular/core';

interface Disciplinas {
  nome: string;
  horario: string;
  dia: string;
}

@Injectable()
export class DisciplinasService {
  disciplinas: Array<Disciplinas> = [];

  constructor() {
    this.adicionarDisciplina(
      'Projeto de Encontrabilidade',
      '19:00',
      'Segunda-feira'
    );
    this.adicionarDisciplina(
      'Criação de Empresas para Internet',
      '19:00',
      'Terça-feira'
    );
    this.adicionarDisciplina('Inglês VI', '20:50', 'Terça-feira');
    this.adicionarDisciplina(
      'Arquitetura Orientada a Serviços',
      '20:50',
      'Quarta-feira'
    );
    this.adicionarDisciplina(
      'Tópicos Especiais em Sistemas para Internet II',
      '20:50',
      'Quinta-feira'
    );
    this.adicionarDisciplina(
      'Tópicos Especiais em Sistemas para Internet III',
      '19:00',
      'Sexta-feira'
    );
    this.adicionarDisciplina(
      'Criação de Empresas para Internet',
      '19:00',
      'Sexta-feira'
    );
    this.adicionarDisciplina(
      'Desenvolvimento para Dispositivos Móveis II',
      '12:30',
      'Sábado'
    );
  }

  adicionarDisciplina(nome: string, horario: string, dia: string) {
    if (nome != '' && horario != '' && dia != '') {
      this.disciplinas.push({
        nome,
        horario,
        dia,
      });
    }
  }

  getDisciplinas() {
    return this.disciplinas;
  }

  removerDisciplina(index: number) {
    this.disciplinas.splice(index, 1);
  }
}
