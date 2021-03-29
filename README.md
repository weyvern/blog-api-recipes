# Install

```bash
git clone https://github.com/weyvern/blog-api-recipes
cd blog-api-recipes/
npm install
```

# Environment

Create a .env file with a PG_CONN variable, it has to be a valid PostgreSQL connection string.

# API routes and methods

- GET /recipes
- GET /recipes/:id
- POST /recipes

```json
{
  "name": "String",
  "description": "String",
  "imgurl": "String",
  "instructions": "String",
  "ingredients": "String (comma separated)"
}
```
