import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchtext: string = '';

  @Output() buscarEvento = new EventEmitter<string>();

  emitirBusqueda() {
    this.buscarEvento.emit(this.searchtext);
  }
}

