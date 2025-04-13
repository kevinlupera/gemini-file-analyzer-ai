import { GoogleGenerativeAI } from '@google/generative-ai';
import type { Part } from '@google/generative-ai';
import { DEFAULT_CONFIG } from '../config/defaults';
import type { DocumentAnalysisOptions, DocumentAnalysisResult } from '../types';

export class FileAnalyzerService {
  private readonly generativeAI: GoogleGenerativeAI;

  constructor(apiKey: string) {
    this.generativeAI = new GoogleGenerativeAI(apiKey);
  }

  private createDocumentPart(file: Buffer, fileType: string): Part {
    return {
      inlineData: {
        data: file.toString('base64'),
        mimeType: fileType,
      },
    };
  }

  private mergeConfigs(options: DocumentAnalysisOptions) {
    return {
      ...DEFAULT_CONFIG,
      ...options.analyzerOptions,
      generationConfig: {
        ...DEFAULT_CONFIG.generationConfig,
        ...options.analyzerOptions?.generationConfig,
      },
    };
  }

  async analyzeDocument(
    file: Buffer,
    options: DocumentAnalysisOptions,
  ): Promise<DocumentAnalysisResult> {
    const config = this.mergeConfigs(options);
    const model = this.generativeAI.getGenerativeModel({
      model: config.model,
      systemInstruction: options.systemInstruction,
      generationConfig: config.generationConfig,
    });

    const doc = this.createDocumentPart(file, options.fileType);
    const result = await model.generateContent([doc]);

    return {
      data: result.response.text(),
      metadata: {
        model: config.model,
        timestamp: new Date().toISOString(),
      },
    };
  }
}
