import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesEstagioComponent } from './detalhes-estagio.component';

describe('DetalhesEstagioComponent', () => {
  let component: DetalhesEstagioComponent;
  let fixture: ComponentFixture<DetalhesEstagioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesEstagioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesEstagioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
