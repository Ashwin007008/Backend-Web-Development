# Supporting Layers - Refactored articles-api

A clean, layered Express API separating concerns into dedicated folders.

## Project Structure

```
articles-api/
|-- config/index.js              <- Only file that reads process.env
|-- utils/AppError.js            <- Custom error class
|-- utils/asyncHandler.js        <- Wraps async handlers
|-- utils/validateRequest.js     <- Checks express-validator errors
|-- validators/article.validator.js  <- All validation chains
|-- routes/articles.js
|-- controllers/articlesController.js
|-- services/articlesService.js
|-- middleware/errorHandler.js
|-- repository/articlesRepo.js
|-- .env.example
|-- .gitignore
|-- app.js
`-- package.json
```

## Quick Start

```bash
npm install
npm start
```

## Test the API

```bash
# List articles
curl http://localhost:3000/articles

# Create valid article (201)
curl -X POST http://localhost:3000/articles -H "Content-Type: application/json" -d '{"title":"Supporting Layers","body":"Validators, utils, and config."}'

# Invalid article - empty title (422)
curl -X POST http://localhost:3000/articles -H "Content-Type: application/json" -d '{"title":"","body":"missing title"}'
```

## Self-Audit

```bash
grep -rn "process.env" --include="*.js" . --exclude-dir=node_modules
# Should only match config/index.js
```
