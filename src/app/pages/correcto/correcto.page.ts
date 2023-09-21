import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-correcto',
  templateUrl: './correcto.page.html',
  styleUrls: ['./correcto.page.scss'],
})
export class CorrectoPage implements OnInit {

  public usuario: Usuario = new Usuario('', '', '', '', '');

  constructor(
    private activeroute: ActivatedRoute
      , private router: Router
  ) {
    this.activeroute.queryParams.subscribe(params => {       // Utilizamos expresión lambda
      const navigation = this.router.getCurrentNavigation();
      if (navigation) {
        if (navigation.extras.state) { // Validar que tenga datos extras
          // Si tiene datos extra, se rescatan y se asignan a una propiedad
          this.usuario = navigation.extras.state['usuario'];
        } else {
          /*
            Si no vienen datos extra desde la página anterior, quiere decir que el usuario
            intentó entrar directamente a la página home sin pasar por el login,
            de modo que el sistema debe enviarlo al login para que inicie sesión.
          */
          this.router.navigate(['/login']);
        }
      } else {
        this.router.navigate(['/login']);
      }
  });
   }

  ngOnInit() {
  }
  
}
