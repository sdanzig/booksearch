# BookSearch Web Application

Welcome to the BookSearch Web Application, where books are more than just dead trees covered in ink!  This repository contains the UI and server for BookSearch, a platform for searching for books by title or author.

## Overview

### book-search-app

This directory contains a Next.js/Tailwind-based web app for searching for books. It runs by default on port 3000.

### book-server

This directory includes a FastAPI-based server with one endpoint for searching for books, `GET /api/books`. It retrieves results using the Google Books API and runs by default on port 8000.

Both components include Dockerfiles for containerization, allowing easy deployment and scaling.

## Prerequisites

Before running the application, you'll need to install the following:

### For the UI:

- **Node.js**: This is required to run the Next.js application. You can download it [here](https://nodejs.org/).
- **npm**: Usually installed with Node.js, this package manager will help you install other necessary dependencies.
- **Next.js**: Install it globally using the command:
  ```bash
  npm install -g next
  ```

### For the Server:

- **Python**: Download the appropriate version (3.8 or later) from the [official website](https://www.python.org/downloads/).
- **FastAPI**: Install it using pip:
  ```bash
  pip install fastapi
  ```
- **uvicorn**: Install it using pip:
  ```bash
  pip install uvicorn
  ```

## Running Locally

### Running the Server

To run the server locally, navigate to the `book-server` directory and execute the following command:

```bash
uvicorn main:app --reload
```

### Running the UI

To run the UI locally, navigate to the `book-search-app` directory and execute the following command:

```bash
npm run dev
```

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

- Make sure the ports 3000 and 8000 are available on your system, or modify the configurations accordingly.
- CORS protection is currently disabled for ease of development and testing.
