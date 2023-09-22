import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDatosBrutosComponent } from './list-datos-brutos.component';

describe('ListDatosBrutosComponent', () => {
  let component: ListDatosBrutosComponent;
  let fixture: ComponentFixture<ListDatosBrutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDatosBrutosComponent]
    });
    fixture = TestBed.createComponent(ListDatosBrutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
