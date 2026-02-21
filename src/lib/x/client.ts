import { TwitterApi } from "twitter-api-v2";
import { xRateLimiter } from "./rate-limiter";

let xClientInstance: TwitterApi | null = null;

function getXClient(): TwitterApi {
  if (!xClientInstance) {
    const apiKey = process.env.X_API_KEY;
    const apiSecret = process.env.X_API_SECRET;
    const accessToken = process.env.X_ACCESS_TOKEN;
    const accessSecret = process.env.X_ACCESS_TOKEN_SECRET;

    if (!apiKey || !apiSecret || !accessToken || !accessSecret) {
      throw new Error(
        "X API credentials not configured. Set X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_TOKEN_SECRET."
      );
    }

    xClientInstance = new TwitterApi({
      appKey: apiKey,
      appSecret: apiSecret,
      accessToken,
      accessSecret,
    });
  }
  return xClientInstance;
}

/**
 * Post a single tweet with optional media.
 * Returns the tweet ID.
 */
export async function postTweet(
  text: string,
  mediaId?: string
): Promise<string> {
  await xRateLimiter.waitForSlot();

  const client = getXClient();
  const options: Record<string, unknown> = {};
  if (mediaId) {
    options.media_ids = mediaId;
  }

  const result = await client.v1.tweet(text, options);
  return String(result.id_str);
}

/**
 * Post a thread (array of tweet texts).
 * First tweet can include a media attachment.
 * Returns array of tweet IDs.
 */
export async function postThread(
  tweets: string[],
  firstMediaId?: string
): Promise<string[]> {
  const client = getXClient();
  const ids: string[] = [];

  for (let i = 0; i < tweets.length; i++) {
    await xRateLimiter.waitForSlot();

    const options: Record<string, unknown> = {};
    if (i === 0 && firstMediaId) {
      options.media_ids = firstMediaId;
    }
    if (i > 0) {
      options.in_reply_to_status_id = ids[i - 1];
    }

    const result = await client.v1.tweet(tweets[i], options);
    ids.push(String(result.id_str));
  }

  return ids;
}

/**
 * Upload an image from URL to X for media attachment.
 * Downloads the image and uploads via X API v1.1 media/upload.
 */
export async function uploadMediaFromUrl(
  imageUrl: string
): Promise<string> {
  await xRateLimiter.waitForSlot();

  const client = getXClient();

  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error(`Failed to download image: ${response.status}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());

  const mediaId = await client.v1.uploadMedia(buffer, {
    mimeType: "image/jpeg",
  });

  return mediaId;
}
