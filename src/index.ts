import { FileAnalyzerService } from './services/file-analyzer';
import type { DocumentAnalysisOptions, DocumentAnalysisResult } from './types';

export default class GeminiFileAnalyzer {
  private readonly analyzer: FileAnalyzerService;

  constructor(apiKey: string) {
    this.analyzer = new FileAnalyzerService(apiKey);
  }

  async analyzeDocument(
    file: Buffer,
    options: DocumentAnalysisOptions,
  ): Promise<DocumentAnalysisResult> {
    return this.analyzer.analyzeDocument(file, options);
  }
}
