import { Component, output, signal } from '@angular/core';

interface WelcomeEmoji {
  id: number;
  symbol: string;
  top: string;
  left: string;
  size: string;
  delay: string;
  duration: string;
}

const WELCOME_SYMBOLS = ['🧚', '🐮', '✨', '🍄'];
const LEAVE_TRANSITION_MS = 500;

@Component({
  selector: 'app-welcome-screen',
  imports: [],
  templateUrl: './welcome-screen.html',
  styleUrl: './welcome-screen.css',
})
export class WelcomeScreenComponent {
  readonly ready = output<void>();

  protected readonly isLeaving = signal(false);

  protected readonly emojis: WelcomeEmoji[] = Array.from({ length: 16 }, (_, id) => ({
    id,
    symbol: WELCOME_SYMBOLS[id % WELCOME_SYMBOLS.length],
    top: `${Math.random() * 88}%`,
    left: `${Math.random() * 88}%`,
    size: `${18 + Math.random() * 16}px`,
    delay: `${Math.random() * 5}s`,
    duration: `${5 + Math.random() * 4}s`,
  }));

  protected onReadyClick(): void {
    if (this.isLeaving()) {
      return;
    }
    this.isLeaving.set(true);
    setTimeout(() => this.ready.emit(), LEAVE_TRANSITION_MS);
  }
}
