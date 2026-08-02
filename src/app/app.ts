import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FairyParticlesComponent } from './shared/components/fairy-particles/fairy-particles';
import { WelcomeScreenComponent } from './features/welcome/welcome-screen/welcome-screen';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FairyParticlesComponent, WelcomeScreenComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly hasEntered = signal(false);

  protected onReady(): void {
    this.hasEntered.set(true);
  }
}
