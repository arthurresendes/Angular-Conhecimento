import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  nome: string = 'Arthur';
  // ViewChild permite acessar elementos html por id
  @ViewChild('meuModal') meuModal!: ElementRef<HTMLDialogElement>;

  abrirModal() {
    this.meuModal.nativeElement.showModal();
  }

  fecharModal() {
    this.meuModal.nativeElement.close();
  }
}
