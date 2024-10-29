import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadDinamicComponent } from './cantidad-dinamic.component';

describe('CantidadDinamicComponent', () => {
  let component: CantidadDinamicComponent;
  let fixture: ComponentFixture<CantidadDinamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CantidadDinamicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantidadDinamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
