import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ContadorComponent implements OnInit {

  ngOnInit() {
    this.cantidad.set(this.cantidadInicial)
  }

  @Output() cantidadCambiada = new EventEmitter<number>();
  @Input() cantidadInicial: number = 1;
  cantidad = signal(1);

  sumar() {
    this.cantidad.set(this.cantidad() + 1);
    this.cantidadCambiada.emit(this.cantidad());
  }
  restar() {
    if (this.cantidad() > 1) {
      this.cantidad.set(this.cantidad() - 1);
      this.cantidadCambiada.emit(this.cantidad());
    }
  }

}