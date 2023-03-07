import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sexo: string='';
  altura: string='';
  resultado: number=0;;
  radioSelecionada:string='';
  mensagem:number=0;
  valorCompra: number=0;
  compra: string='';

  constructor(
    //public toastController: ToastController, //são objetos //class letra MAISUCULA //objeto n pode ter msm nome class
    public alertController: AlertController
  ) {}

  
  calcular() { //ta chamando p executar as ações

    if (this.sexo=== 'homem'){
      this.resultado=parseFloat(this.altura) *72.7 - 58;
   
    }else{
      if(this.sexo=== 'mulher'){
        this.resultado=parseFloat(this.altura) *62.1 - 44.7; 
        }
    }
 }
  
verificar (){
  if (this.radioSelecionada=== 'pix'){
    this.valorCompra= parseFloat(this.compra) - (parseFloat(this.compra) * 0.10);
  }

  if(this.radioSelecionada=== 'debito'){
      this.valorCompra= parseFloat(this.compra);
  }

  if(this.radioSelecionada==='credito') {
      this.valorCompra= (parseFloat(this.compra) * 0.10) + parseFloat(this.compra);
  }
  
 this.exibirAlerta();
}

 async exibirAlerta() {
   const alert = await this.alertController.create({
    header: 'O valor da compra é: ', //cabeçalho
    message: this.valorCompra.toString(), //msg caixinha
    buttons: ['OK'] //config botoes
    });
    alert.present();
  }

}
