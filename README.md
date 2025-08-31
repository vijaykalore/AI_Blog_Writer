# AI_Blog_Writer

Created by: Vijay Kalore

A lightweight project that helps generate, edit, and publish blog posts. It combines a small Flask endpoint with a Streamlit UI to provide a simple workflow: prepare a prompt, generate a draft, review/edit, and export or publish the content.

This README describes how to get the project running locally, how the pieces fit together, and common troubleshooting tips.

## Table of Contents
- Project overview
- Features
- Requirements
- Installation (Windows)
- Running the project
- Configuration
- Project structure
- Development notes
- Publishing to GitHub
- Troubleshooting
- License
- Contact

## Project overview
AI_Blog_Writer is intended as a practical tool to speed up blog creation. It provides:
- A Flask backend that exposes endpoints used by the UI.
- A Streamlit front-end for rapid interaction and editing.
- Utilities for exporting posts (Markdown/HTML) and basic content management.

This repository is a starting point — you can customize prompt templates, add CMS integrations, or hook into publishing APIs.

## Features
- Generate draft blog posts from prompts (configurable).
- Edit, preview, and export drafts from a Streamlit UI.
- Simple Flask API used by the front-end for lightweight processing.
- Local-first design so you retain full control of generated content.

## Requirements
- Windows 10/11
- Python 3.12
- Conda (recommended) or a virtualenv
- Git (for source control and publishing)

Optional:
- API keys for external services (place in environment variables or a .env file).

## Installation (Windows, recommended)
Open a terminal (PowerShell or CMD) and run:

1. Clone the repository (if not already cloned):
```bash
git clone https://github.com/vijaykalore/AI_Blog_Writer.git
cd AI_Blog_Writer
```

2. Create and activate a Conda environment:
```bash
conda create -n agentapp python=3.12 -y
conda activate agentapp
```

3. Install Python dependencies:
```bash
pip install -r requirements.txt
```

4. Create a .env file (optional) to store any API keys or configuration:
```text
# .env (example)
OPENAI_API_KEY=sk-...
OTHER_SERVICE_KEY=...
```

Make sure to add `.env` to `.gitignore` so keys are not committed.

## Running the project
This project has a small Flask endpoint and a Streamlit UI. Start them as follows:

1. Start the Flask server
```bash
python endpoint.py
```
Default: Flask will bind to the host and port shown in the console (commonly http://127.0.0.1:5000). If your endpoint uses a different port, adjust Streamlit settings accordingly.

2. In a separate terminal, start the Streamlit app:
```bash
streamlit run app.py
```
Streamlit will open a browser tab (or show a URL). Use the UI to create and edit posts.

Notes:
- If you change Flask port, update the URLs used by the Streamlit front-end.
- Watch the console logs for errors — they usually indicate missing packages or configuration issues.

## Configuration
- Prompt templates: Look for a `prompts` folder or templates inside the code. Edit them to change the voice or structure of generated posts.
- Environment variables: The app reads keys from the environment. Use the `.env` file or set system environment variables.

## Project structure (example)
- endpoint.py — Flask API; handles generation, simple formatting, and export routes.
- app.py — Streamlit UI for creating and editing drafts.
- requirements.txt — Python dependencies.
- templates/, static/ — any HTML/CSS assets used by the project.
- README.md — this file.

(Your local repository may have additional files; the above lists the main entry points.)

## Development notes
- Keep code modular: separate prompt logic, API calls, and presentation.
- Add unit tests around core text-processing functions. Tests make refactoring safer.
- Use feature branches when adding major features and open pull requests for review.

