import * as z from 'zod';

// Define the environment schema for validation
const envSchema = z.object({
  // JWT configuration
  JWT_SECRET: z.string().min(16).default('telecomxpertz-admin-secret'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  
  // Database
  DATABASE_URL: z.string().optional(),
  
  // API Keys
  OPENAI_API_KEY: z.string().optional(),
  WEATHER_API_KEY: z.string().default('d377d6c0d4c741ecbb0173305251104'),
  
  // Server configuration
  PORT: z.coerce.number().default(5000),
  
  // Session configuration
  SESSION_SECRET: z.string().min(16).default('telecomxpertz-session-secret'),
});

// Function to validate environment variables
function validateEnv() {
  const envVars = {
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    PORT: process.env.PORT,
    SESSION_SECRET: process.env.SESSION_SECRET,
  };

  try {
    // Validate and parse the environment variables
    return envSchema.parse(envVars);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessage = JSON.stringify(
        error.errors.map(err => `${err.path}: ${err.message}`),
        null,
        2
      );
      console.error('❌ Invalid environment variables:', errorMessage);
    }
    throw new Error('Invalid environment variables');
  }
}

// Export the validated environment variables
const env = validateEnv();

export default env;