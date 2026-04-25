# 🎬 Latest Movie API (2025)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)

A high-performance, lightweight Node.js API that serves a comprehensive dataset of the latest 2025 movies. Built with Express and optimized for Vercel deployment, this API provides a seamless way to integrate up-to-date movie metadata into your applications.

## 🌟 Key Features

- **🚀 Instant Setup**: Minimal configuration required to get the API running.
- **📄 CSV-Powered**: Data is sourced from a robust 2025 movie dataset CSV.
- **🔢 Smart Pagination**: Efficiently browse through thousands of records with built-in `page` and `limit` support.
- **🌐 CORS Enabled**: Ready to be consumed by any frontend application.
- **☁️ Cloud Ready**: Pre-configured for deployment on Vercel.
- **📁 Static Hosting**: Serves a default landing page or documentation from the `public` directory.

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Parser**: [csv-parser](https://www.npmjs.com/package/csv-parser)
- **Middleware**: [CORS](https://www.npmjs.com/package/cors)
- **Deployment**: [Vercel](https://vercel.com/)

## 📂 Project Structure

```text
LatestMovieAPI/
├── public/                 # Static assets and frontend
│   ├── index.html          # Landing page
│   └── favicon.svg         # API Icon
├── Latest 2025 movies...   # Source CSV dataset
├── index.js                # Core API logic
├── vercel.json             # Vercel deployment config
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.x or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/LatestMovieAPI.git
   cd LatestMovieAPI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm start
```
The server will be available at `http://localhost:3000`. You will see a confirmation message once the CSV data is fully loaded into memory.

## 📖 API Documentation

### Get All Movies

Returns a paginated list of movies from the 2025 dataset.

- **Endpoint**: `/movies`
- **Method**: `GET`
- **Query Parameters**:

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `page` | `number` | `1` | The page number to retrieve. |
| `limit` | `number` | `100` | Number of items per page. |

#### Example Request
```http
GET http://localhost:3000/movies?page=1&limit=10
```

#### Example Response
```json
{
  "next": {
    "page": 2,
    "limit": 10
  },
  "total": 5420,
  "totalPages": 542,
  "currentPage": 1,
  "results": [
    {
      "id": "1",
      "Title": "Movie Title",
      "Year": "2025",
      "Genre": "Action",
      "Director": "..."
    }
  ]
}
```

## ☁️ Deployment

This project is optimized for **Vercel**. To deploy:

1. Install the Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the root directory.
3. Follow the prompts to complete the deployment.

The `vercel.json` ensures that the CSV data file is included in the serverless function bundle.

## 🤝 Contributing

Contributions are welcome! If you have a dataset update or a feature suggestion, feel free to:
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the ISC License. See `package.json` for more information.

---
*Created with ❤️ for the Movie Community*
