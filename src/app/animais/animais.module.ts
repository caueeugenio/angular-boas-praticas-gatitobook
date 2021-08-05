import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CartaoModule } from '../componentes/cartao/cartao.module';
import { MensagemModule } from '../components/mensagem/mensagem.module';
import { AnimaisRoutingModule } from './animais-routing.module';
import { AnimalComponent } from './animal/animal.component';
import { ComentariosComponent } from './detalhe-animal/comentarios/comentarios.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';

@NgModule({
  declarations: [ListaAnimaisComponent, AnimalComponent, GradeFotosAnimaisComponent, DetalheAnimalComponent, ComentariosComponent],
  imports: [CommonModule, AnimaisRoutingModule, CartaoModule, MensagemModule,ReactiveFormsModule],
})
export class AnimaisModule {}
