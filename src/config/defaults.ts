import type { ReaderOptions } from '../types';

export const DEFAULT_CONFIG: ReaderOptions = {
  model: 'gemini-2.0-flash-exp',
  generationConfig: {
    temperature: 0.45,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 18192,
    responseMimeType: 'application/json',
  },
};
