# BookSearch Web Application

This repository contains the UI and server for the BookSearch web application, a platform for searching for books by title or author.

## Overview

### book-search-app

This directory contains a Next.js/Tailwind-based web app for searching for books. It runs by default on port 3000.

### book-server

This directory includes a FastAPI-based server with one endpoint for searching for books, `GET /api/books`. It retrieves results using the Google Books API and runs by default on port 8000.

Both components include Dockerfiles for containerization, allowing easy deployment and scaling.

## Running Locally

### Running the Server

To run the server locally, navigate to the `book-server` directory and execute the following command:

```bash
uvicorn main:app --reload
```

This will start the server with hot reloading enabled, making it ideal for development.

### Running the UI

To run the UI locally, navigate to the `book-search-app` directory and execute the following command:

```bash
npm run dev
```

This will start the development server, and you can access the UI at `http://localhost:3000`.

## Containerization

Both the UI and the server come with Dockerfiles, enabling containerization for deployment.

### Building the Containers

#### UI

```bash
docker build -t book-search-app .
```

#### Server

```bash
docker build -t book-server .
```

## Additional Information

- Ensure that you have the necessary dependencies installed, including Node.js for the UI and Python for the server.
- Make sure the ports 3000 and 8000 are available on your system, or modify the configurations accordingly.
- CORS protection is currently disabled for ease of development and testing.
