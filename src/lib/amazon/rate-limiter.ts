/**
 * Rate limiter for Amazon PA-API (max 1 request/second).
 * Ensures minimum gap between API calls.
 */
class RateLimiter {
  private lastRequestTime = 0;
  private readonly minInterval: number;

  constructor(requestsPerSecond: number = 1) {
    this.minInterval = 1000 / requestsPerSecond;
  }

  async waitForSlot(): Promise<void> {
    const now = Date.now();
    const elapsed = now - this.lastRequestTime;

    if (elapsed < this.minInterval) {
      await new Promise((resolve) =>
        setTimeout(resolve, this.minInterval - elapsed)
      );
    }

    this.lastRequestTime = Date.now();
  }
}

export const amazonRateLimiter = new RateLimiter(1);
