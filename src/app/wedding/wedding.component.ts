import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-wedding',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss']
})
export class WeddingComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  // Az esküvő dátuma
  private weddingDate = new Date('2024-10-19T15:00:00'); // Állítsd be a pontos időt, ha szükséges

  // Időegységek
  public days: number = 0;
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;

  // Jelzi, hogy a konfetti már megjelent-e
  private hasConfettiLaunched = false;

  ngOnInit() {
    this.subscription = interval(1000)
      .subscribe(() => { this.getTimeDifference(); });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getTimeDifference() {
    const now = new Date();
    const timeDifference = this.weddingDate.getTime() - now.getTime();

    if (timeDifference > 0) {
      this.allocateTimeUnits(timeDifference);
    } else {
      // Ha az idő lejárt, állítsuk nullára az értékeket
      this.days = this.hours = this.minutes = this.seconds = 0;

      // Indítsuk el a konfetti esőt, ha még nem történt meg
      if (!this.hasConfettiLaunched) {
        this.launchConfetti();
        this.hasConfettiLaunched = true;
      }
    }
  }

  private allocateTimeUnits(timeDifference: number) {
    this.seconds = Math.floor((timeDifference / 1000) % 60);
    this.minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    this.hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  }

  private launchConfetti() {
    // Konfetti eső indítása
    const duration = 10 * 1000000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      // Alapértelmezett konfetti
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
    }, 250);
  }
}
