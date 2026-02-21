/**
 * Rate limiter for X (Twitter) API.
 * Ensures minimum gap between API calls to avoid rate limiting.
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

// 5-second interval between X API calls
export const xRateLimiter = new RateLimiter(1 / 5);
