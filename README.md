# MERN AI Flow Application

This is the **MERN AI Flow Application**, a web app where users can type prompts, run them through an AI model, and see the results in a visual flow chart. Users can also save prompts and AI responses to a database for future reference.  




## Project Overview

The MERN AI Flow app allows a user to:  

1. Type a prompt into an input node on a visual flow chart.  
2. Click **Run Flow** to send the prompt to an AI model via the backend.  
3. Display the AI's response in a connected result node.  
4. Save the prompt and response to MongoDB for future reference.  

This demonstrates the integration of **React Flow, MongoDB, Node/Express backend, and AI APIs**.  

---

## Features

- Visual flowchart interface with **React Flow**.  
- AI integration via **OpenRouter API**.  
- RESTful backend built with **Express.js**.  
- MongoDB storage for prompts and AI responses.  
- Save and retrieve prompts with ease.  

---

## Tech Stack

- **Frontend:** React, React Flow, Tailwind CSS (optional)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Atlas or local)  
- **AI:** OpenRouter API (Free Models: `google/gemini-2.0-flash-lite-preview-02-05:free` or `mistralai/mistral-7b-instruct:free`)  

---

## Installation

1. **Clone the repository:**

bash
git clone https://github.com/SREESANTHwWw/Ai-MernApp-BD/
cd Server
npm install 


In the backend folder, create a .env file:

PORT=YOUR PORT
MONGO_URI=your_mongodb_connection_string
OPENROUTER_API_KEY=your_openrouter_api_key

npm start  


