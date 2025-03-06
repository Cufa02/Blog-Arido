import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacomentarioComponent } from './listacomentario.component';

describe('ListacomentarioComponent', () => {
  let component: ListacomentarioComponent;
  let fixture: ComponentFixture<ListacomentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListacomentarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListacomentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
