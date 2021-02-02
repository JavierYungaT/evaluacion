import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearDestinoTurisPage } from './crear-destino-turis.page';

describe('CrearDestinoTurisPage', () => {
  let component: CrearDestinoTurisPage;
  let fixture: ComponentFixture<CrearDestinoTurisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearDestinoTurisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearDestinoTurisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
