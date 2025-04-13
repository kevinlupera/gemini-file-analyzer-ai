import type { GenerationConfig } from '@google/generative-ai';

export interface ReaderOptions {
  model: string;
  generationConfig: GenerationConfig;
}

export interface DocumentAnalysisOptions {
  systemInstruction: string;
  fileType: string;
  analyzerOptions?: Partial<ReaderOptions>;
}

export interface DocumentAnalysisResult {
  data: string;
  metadata?: Record<string, unknown>;
}
