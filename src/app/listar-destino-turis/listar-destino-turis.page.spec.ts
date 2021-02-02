import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarDestinoTurisPage } from './listar-destino-turis.page';

describe('ListarDestinoTurisPage', () => {
  let component: ListarDestinoTurisPage;
  let fixture: ComponentFixture<ListarDestinoTurisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDestinoTurisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarDestinoTurisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
