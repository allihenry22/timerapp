/* eslint-disable no-underscore-dangle */
import convertMilliseconds from './convert-milliseconds';

class Timer {
  static __tickRate = 1000;

  constructor({
    lengthInMs,
    onTick,
    onStop,
  }) {
    this.onTick = onTick || function () {
    };
    this.onStop = onStop || function () {
    };
    this.isRunning = false;
    this.nextTick = 0;
    this.length = lengthInMs;
    this.stopTime = 0;
    this.formattedTimeRemaining = '';
  }

  nextAnimationFrame = () => {
    const now = Date.now();

    if (this.nextTick <= now) {
      this.nextTick = now + Timer.__tickRate;

      const msRemaining = this.stopTime - now;

      const timeRemainingObject = convertMilliseconds(msRemaining);

      const {formatted} = timeRemainingObject;

      this.formattedTimeRemaining = formatted;

      this.onTick({
        msRemaining,
        timeRemainingObject,
        timeRemaining: this.formattedTimeRemaining,
      });
    }

    if (this.stopTime >= now) {
      requestAnimationFrame(this.nextAnimationFrame);
    } else {
      this.isRunning = false;

      this.onStop(this.formattedTimeRemaining);
    }
  }

  starTimer() {
    this.nextTick = Date.now();
    this.stopTime = this.nextTick + this.length;

    const {formatted} = convertMilliseconds(this.length);

    this.isRunning = true;

    this.formattedTimeRemaining = formatted;

    this.nextAnimationFrame();
  }
}

export default Timer;
/*
Example:
 const test = new Timer({
 lengthInMs: 30000,
 onTick: ({
 timeRemaining,
 msRemaining, timeRemainingObject,
 }) => console.log(
 `On tick: formattedTime : ${timeRemaining}, ms remaining: ${msRemaining}`, timeRemainingObject,
 ),
 onStop: (remainingTime) => console.log(remainingTime),
 });

 test.starTimer();
 */
