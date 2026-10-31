import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Shoesandbagscomponent } from './shoesandbagscomponent';

describe('Shoesandbagscomponent', () => {
  let component: Shoesandbagscomponent;
  let fixture: ComponentFixture<Shoesandbagscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shoesandbagscomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Shoesandbagscomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
