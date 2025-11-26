# Latest Movie API

A Node.js Express API that serves a dataset of the latest 2025 movies. The API reads from a CSV file and provides a paginated JSON endpoint.

## Features
- Serves movie data from a CSV file.
- Supports pagination (page and limit).
- CORS enabled.

## Installation

1.  Clone the repository or download the source code.
2.  Navigate to the project directory:
    ```bash
    cd LatestMovieAPI
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

## Usage

1.  Start the server:
    ```bash
    node index.js
    ```
    The server will start on `http://localhost:3000`.

2.  The API will load the CSV data into memory. Wait for the "CSV file successfully processed" message.

## API Endpoints

### Get Movies

Retrieves a paginated list of movies.

**Endpoint:** `GET /movies`

**Query Parameters:**

| Parameter | Type    | Default | Description                                      |
| :-------- | :------ | :------ | :----------------------------------------------- |
| `page`    | Integer | `1`     | The page number to retrieve.                     |
| `limit`   | Integer | `100`   | The number of movies per page.                   |

**Example Request:**

```http
GET http://localhost:3000/movies?page=2&limit=50
```

**Example Response:**

```json
{
  "next": {
    "page": 3,
    "limit": 50
  },
  "previous": {
    "page": 1,
    "limit": 50
  },
  "total": 10000,
  "totalPages": 200,
  "currentPage": 2,
  "results": [
    {
      "id": "101",
      "title": "Example Movie",
      "release_date": "2025-01-01",
      ...
    },
    ...
  ]
}
```
