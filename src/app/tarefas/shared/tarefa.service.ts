import { Injectable } from '@angular/core';

import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[]{
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void{
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefa'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa{
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void{
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) =>{
      if(tarefa.id === obj.id){
        objs[index] = tarefa;
      }  
    });
    localStorage['tarefas']. JSON.stringify(tarefas);
    
  }

}
