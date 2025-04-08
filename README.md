
# AI Sustainability Summary Generator – Lab 5 (COMP308)

## Overview

This project is part of Lab Assignment #5 for COMP308. It allows users to generate AI-powered summaries of sustainability reports from leading software companies like Microsoft, Google, and Amazon using the OpenAI API.

The project includes:
- A Node.js backend using Express that communicates with OpenAI’s `gpt-3.5-turbo` model.
- A frontend (HTML + CSS + JS) with a clean UI, dark mode, and download feature.

---

## Environmental Initiative Article Links (2024)

- **Microsoft Sustainability Report 2024**  
  https://www.microsoft.com/en-us/corporate-responsibility/sustainability/report

- **Google Environmental Report 2024**  
  https://sustainability.google/reports/google-2024-environmental-report/

- **Amazon Sustainability Hub**  
  https://sustainability.aboutamazon.com/

---

## How It Works

### Technologies Used
- Node.js
- Express
- OpenAI API (GPT-3.5)
- HTML + CSS + JavaScript

### Backend (`server.js`)
- Accepts a POST request at `/summarize` with a prompt.
- Uses the OpenAI API to summarize the input.
- Returns a summary in JSON format.

### Frontend (`index.html`)
- Text area for prompt input
- Button to trigger summarization
- Toggle for dark mode
- Button to download the summary as a text file

---

## Running the App Locally

1. Install Node.js from https://nodejs.org
2. Get your OpenAI API key from https://platform.openai.com/account/api-keys
3. In the `backend/` folder, install dependencies:
    ```bash
    npm install express node-fetch@2 cors body-parser
    ```
4. Open `server.js` and paste your API key:
    ```js
    const apiKey = 'sk-...'; 
    ```
5. Run the backend:
    ```bash
    node server.js
    ```
6. Open `frontend/index.html` in a browser.
7. Paste a sustainability article summary prompt and click **Generate Summary**.

---

## Testing Process

- Verified backend responses with simple prompts
- Logged OpenAI API responses in the server for debugging
- Checked UI behavior for input, error handling, and output
- Downloaded summary to `.txt` to validate output file
- Tested dark mode toggle for styling

---

## Team Collaboration

| Name | Task |
|------|------|
| Tamirlan Baidauletov | Setup backend, frontend styling, API integration |
| Ayush Chaturvedi     | Article research, prompt writing |
| Donna Marie Brar     | README, testing and documentation |
|  Yevhen Slavych      | UI features (download, dark mode) |

---
