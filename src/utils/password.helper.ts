import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;
const SECRET_KEY = process.env.HASH_SECRET || '';

/**
 * Hash password using bcrypt + secret key (HMAC-style)
 */
export async function hashPassword(password: string): Promise<string> {
  // combine password and secret key
  const combined = password + SECRET_KEY;
  const salt = await bcrypt.genSalt(SALT_ROUNDS);

  const hash = await bcrypt.hash(combined, salt);

  // Encode to URL-safe Base64
  const safeHash = Buffer.from(hash).toString('base64url');
  return safeHash;
}

/**
 * Compare plain password with hashed password
 */
export async function comparePassword(password: string, hashed: string): Promise<boolean> {
  const combined = password + SECRET_KEY;
  // Decode Base64 back to original bcrypt hash
  const originalHash = Buffer.from(hashed, 'base64url').toString('utf-8');

  return bcrypt.compare(combined, originalHash);
}
