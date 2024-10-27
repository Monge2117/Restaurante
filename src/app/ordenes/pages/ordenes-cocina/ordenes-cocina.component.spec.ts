import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesCocinaComponent } from './ordenes-cocina.component';

describe('OrdenesCocinaComponent', () => {
  let component: OrdenesCocinaComponent;
  let fixture: ComponentFixture<OrdenesCocinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdenesCocinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenesCocinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
