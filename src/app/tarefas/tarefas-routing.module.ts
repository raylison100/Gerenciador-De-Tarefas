import { Routes} from "@angular/router";

import { ListarTarefaComponent} from "./listar";
import {Tarefa} from "./shared";

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'taefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent
  }
];
