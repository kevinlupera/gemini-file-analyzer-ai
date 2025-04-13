# Gemini File Analyzer

A Node.js library for analyzing files using Google's Gemini Pro Vision model. This library provides an easy-to-use interface for analyzing various types of files (images, PDFs, etc.) using Google's powerful Gemini AI model.

## 🚀 Features

- 🔍 File analysis using Gemini Pro Vision
- ⚙️ Configurable analysis options
- 📝 TypeScript support with full type definitions
- 🎯 Easy-to-use API with sensible defaults
- 📊 Metadata tracking for analysis results
- 🔒 Environment-based API key management
- 🧩 Modular and extensible architecture

## 📋 Requirements

- Node.js >= 22.0.0
- Google Gemini API Key
- TypeScript >= 5.3.3 (for TypeScript projects)

## 📦 Installation

```bash
# Using npm
npm install gemini-file-analyzer-ai

# Using yarn
yarn add gemini-file-analyzer-ai

# Using pnpm
pnpm add gemini-file-analyzer-ai
```

## 🏗️ Project Structure

```
src/
├── config/
│   └── defaults.ts      # Default configuration and constants
├── services/
│   └── file-analyzer.ts # Core analysis service implementation
├── types/
│   └── index.ts         # TypeScript type definitions
└── index.ts             # Main library export
```

## 💻 Usage

### Basic Usage

```typescript
import GeminiFileAnalyzer from 'gemini-file-analyzer-ai';
import fs from 'fs';

// Initialize with your API key
const analyzer = new GeminiFileAnalyzer('YOUR_API_KEY');

// Read a file
const fileBuffer = fs.readFileSync('path/to/your/file.jpg');

// Analyze a file with default options
const result = await analyzer.analyzeDocument(fileBuffer, {
  systemInstruction: 'Analyze this image and describe its contents',
  fileType: 'image/jpeg'
});

console.log('Analysis Result:', result.text);
console.log('Metadata:', result.metadata);
```

### Advanced Usage with Custom Options

```typescript
import GeminiFileAnalyzer from 'gemini-file-analyzer-ai';
import { DocumentAnalysisOptions } from 'gemini-file-analyzer-ai/types';
import fs from 'fs';

// Initialize with your API key
const analyzer = new GeminiFileAnalyzer('YOUR_API_KEY');

// Read a file
const fileBuffer = fs.readFileSync('path/to/your/file.pdf');

// Prepare analysis options
const options: DocumentAnalysisOptions = {
  systemInstruction: 'Extract all text and key information from this document',
  fileType: 'application/pdf',
  analyzerOptions: {
    model: 'gemini-2.5-pro-preview-03-25',
    generationConfig: {
      temperature: 0.5,    // Controls randomness (0.0 to 1.0)
      topP: 0.95,          // Controls diversity (0.0 to 1.0)
      topK: 40,            // Controls token selection
      maxOutputTokens: 18192, // Maximum length of the response
    },
  },
};

// Analyze a file
const result = await analyzer.analyzeDocument(fileBuffer, options);
console.log('Analysis Result:', result.text);
console.log('Metadata:', result.metadata);
```

### Using Environment Variables

```typescript
import GeminiFileAnalyzer from 'gemini-ocr-analyzer';
import 'dotenv/config';

// Initialize using environment variable
const analyzer = new GeminiFileAnalyzer(process.env.GEMINI_API_KEY!);

// Rest of your code...
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in your project root:

```env
GEMINI_API_KEY=your_api_key_here
```

### Default Configuration

The library comes with optimized defaults:

```typescript
{
  model: 'gemini-2.0-flash-exp',
  generationConfig: {
    temperature: 0.45,    // Balanced between creativity and accuracy
    topP: 0.95,          // High diversity in responses
    topK: 40,            // Moderate token selection
    maxOutputTokens: 18192, // Sufficient for most documents
    responseMimeType: 'application/json',
  },
}
```

## 🛠️ Technologies Used

- Node.js - Runtime environment
- TypeScript - Type safety and development experience
- Google Generative AI SDK - Core AI functionality
- Biome - Code formatting and linting
- Husky - Git hooks for code quality
- dotenv - Environment variable management

## 📚 API Reference

### `GeminiFileAnalyzer`

#### Constructor
```typescript
constructor(apiKey: string)
```

#### Methods

##### `analyzeDocument`
```typescript
async analyzeDocument(
  file: Buffer,
  options: DocumentAnalysisOptions
): Promise<DocumentAnalysisResult>
```

### Types

#### `DocumentAnalysisOptions`
```typescript
interface DocumentAnalysisOptions {
  systemInstruction: string;  // Instructions for the AI model
  fileType: string;          // MIME type of the file
  analyzerOptions?: Partial<ReaderOptions>; // Optional configuration overrides
}
```

#### `DocumentAnalysisResult`
```typescript
interface DocumentAnalysisResult {
  text: string;              // The analysis result text
  metadata?: Record<string, unknown>; // Additional information about the analysis
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/kevinlupera/gemini-file-analyzer-ai.git

# Install dependencies
npm install

# Run tests
npm test

# Build the project
npm run build
```

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details. 