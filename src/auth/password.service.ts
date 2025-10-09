import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {
  private readonly saltRounds = 10;
  private readonly secretKey: string;

  constructor(private configService: ConfigService) {
    this.secretKey = this.configService.get<string>('HASH_SECRET', '');
  }

  /**
   * Hash password using bcrypt + secret key (HMAC-style)
   */
  async hashPassword(password: string): Promise<string> {
    const combined = password + this.secretKey;
    const salt = await bcrypt.genSalt(this.saltRounds);
    const hash = await bcrypt.hash(combined, salt);
    return Buffer.from(hash).toString('base64url');
  }

  /**
   * Compare plain password with hashed password
   */
  async comparePassword(password: string, hashed: string): Promise<boolean> {
    const combined = password + this.secretKey;
    const decoded = Buffer.from(hashed, 'base64url').toString('utf8');
    return bcrypt.compare(combined, decoded);
  }
}
