import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SarcasticTextComponent } from './sarcastic-text.component';

describe('SarcasticTextComponent', () => {
  let component: SarcasticTextComponent;
  let fixture: ComponentFixture<SarcasticTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarcasticTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarcasticTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
