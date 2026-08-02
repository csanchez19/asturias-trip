import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FairyParticlesComponent } from './shared/components/fairy-particles/fairy-particles';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FairyParticlesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
