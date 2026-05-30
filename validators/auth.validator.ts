import { z } from 'zod';

export const RegisterSchema = z.object({
  name: z.string().min(1, 'Name cannot be empty').max(50),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});