import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lacescomponent } from './lacescomponent';

describe('Lacescomponent', () => {
  let component: Lacescomponent;
  let fixture: ComponentFixture<Lacescomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lacescomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Lacescomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
