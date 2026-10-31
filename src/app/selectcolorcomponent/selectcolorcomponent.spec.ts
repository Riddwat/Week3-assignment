import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Selectcolorcomponent } from './selectcolorcomponent';

describe('Selectcolorcomponent', () => {
  let component: Selectcolorcomponent;
  let fixture: ComponentFixture<Selectcolorcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selectcolorcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Selectcolorcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
