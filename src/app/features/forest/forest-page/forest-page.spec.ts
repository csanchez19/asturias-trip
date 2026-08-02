import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ForestPageComponent } from './forest-page';
import { routes } from '../../../app.routes';

describe('ForestPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForestPageComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the forest page', () => {
    const fixture = TestBed.createComponent(ForestPageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the forest header and the 5 day nodes', async () => {
    const fixture = TestBed.createComponent(ForestPageComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('El Bosc Encantat');
    expect(compiled.querySelectorAll('app-day-node').length).toBe(5);
  });
});
