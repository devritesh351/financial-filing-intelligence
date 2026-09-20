# Financial Filing Intelligence Platform

An evidence-grounded financial document intelligence platform that allows users to ask natural-language questions about financial filings and receive answers backed by relevant source evidence.

## Why This Project?

Financial filings contain large amounts of structured and unstructured information. Finding a specific piece of information can require searching through hundreds of pages.

This project explores how Retrieval-Augmented Generation (RAG) can be used to make financial filings easier to query while keeping answers grounded in the underlying documents.

The goal is not simply to connect an LLM to a PDF. The system is being designed to understand and implement the complete pipeline:

Document → Extraction → Chunking → Embeddings → Retrieval → Reranking → Evidence → LLM → Answer + Citations

## Core Goals

- Ingest financial filings and documents
- Extract and process document content
- Split documents into meaningful chunks
- Generate embeddings for semantic search
- Store and search vectors using PostgreSQL and pgvector
- Combine semantic and keyword retrieval
- Rerank retrieved evidence
- Generate answers using retrieved evidence
- Provide citations back to the original document
- Evaluate retrieval and answer quality
- Build a usable interface for querying financial information

## Architecture

The planned architecture is:

User
 ↓
React Frontend
 ↓
Fastify API
 ↓
Document / Query Services
 ↓
PostgreSQL + pgvector
 ↓
Retrieval Pipeline
 ↓
Evidence
 ↓
LLM
 ↓
Answer + Citations

The architecture will evolve as the project is implemented.

## Technology Stack

### Backend

- TypeScript
- Node.js
- Fastify

### Database

- PostgreSQL
- pgvector

### Frontend

- React

### AI / Retrieval

- Embedding models
- Vector search
- BM25 / keyword retrieval
- Hybrid retrieval
- Reranking
- Large Language Models

### Development

- Git
- GitHub

## Project Structure

The project is being developed incrementally. The structure will evolve as new components are introduced.

```text
src/
├── app.ts
├── server.ts
├── config/
│   └── env.ts
└── routes/
    └── health.ts