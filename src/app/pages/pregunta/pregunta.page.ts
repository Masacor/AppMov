import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {

  public usuario: Usuario;
  public respuesta: string = '';
  public pregunta: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) 
  {

    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit() {
  }

  // public validarRespuestaSecreta(): void {
  //   if (this.usuario.respuestaSecreta === this.respuesta) {
  //     alert('CORRECTO!!! TU CLAVE ES ' + this.usuario.password);
  //   }
  //   else {
  //     alert('INCORRECTO!!!');
  //   }
  // }

  public validarRespuestaSecreta(): void {
    if (this.usuario.respuestaSecreta === this.respuesta) {
      // Redirigir a la página "correcto" y pasar la clave como parámetro
      alert('CORRECTO!!! Su clave es: ' + this.usuario.password)
      this.router.navigate(['/correcto'], {
        state: { clave: this.usuario.password }
      });
    } else {
      alert('INCORRECTO!!! vuelva a intentarlo')
      this.router.navigate(['/incorrecto']);
    }
  }

}
