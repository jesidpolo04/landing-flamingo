import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaCategoriaAliadoComponent } from './carta-categoria-aliado.component';

describe('CartaCategoriaAliadoComponent', () => {
  let component: CartaCategoriaAliadoComponent;
  let fixture: ComponentFixture<CartaCategoriaAliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaCategoriaAliadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaCategoriaAliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
