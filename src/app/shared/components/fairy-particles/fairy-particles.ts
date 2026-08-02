import { Component } from '@angular/core';

interface Particle {
  id: number;
  top: string;
  left: string;
  size: string;
  delay: string;
  duration: string;
}

@Component({
  selector: 'app-fairy-particles',
  imports: [],
  templateUrl: './fairy-particles.html',
  styleUrl: './fairy-particles.css',
})
export class FairyParticlesComponent {
  protected readonly particles: Particle[] = Array.from({ length: 22 }, (_, id) => ({
    id,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${4 + Math.random() * 6}px`,
    delay: `${Math.random() * 6}s`,
    duration: `${4 + Math.random() * 5}s`,
  }));
}
