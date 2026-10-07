import { Component, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  styleUrl: './home.scss',
  templateUrl: './home.html',
})

export class Home {
  constructor(private toastr: ToastrService) {}

  textoMensagem = signal('')
  count = 0

  alertarSucess(){
   this.toastr.success('Botão clicado')
  }

  alertarWarning(){
    //this.toastr.error('Mensagem retirada')
    this.toastr.warning('Mensagem retirada')
  }

  enviarMensagem(){
    this.textoMensagem.set('Botão clicado')
    this.count++
    this.alertarSucess()
  }

  esvaziar(){
    this.textoMensagem.set('')
    this.count = 0
    this.alertarWarning()
  }
}
