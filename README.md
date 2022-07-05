# Noob products API with Nest

This is my first Nest project done on the [Platzi course](https://platzi.com/cursos/nestjs/).

The application is based on a very simple "products" REST API where it is possible to use the 4 basic HTTP verbs.

In this app it was possible to understand the fundamentals of Nest: Controllers, services, pipes, validations, entities, etc.

## Installation
```bash
git clone https://github.com/juanikitro/Noob-products-API-with-Nest.git product-api
cd product-api
npm i
```
## Start in watch mode
```bash
npm run start:dev
```
## Endpoints
### GET
- /products
If exists, return a JSON with all the products like this:
```json
[
    {
        "id": 1,
        "name": "Product 1",
        "description": "bla",
        "stock": 20,
        "image": "gmail.com",
        "price": 10
    },
    {
        "id": 2,
        "name": "Product 2",
        "description": "bla bla",
        "stock": 300,
        "image": "facebook.com",
        "price": 1
    }
]
```
- /products/:id
If the ID exists, return a JSON with the specific products like this:
```json
{
    "id": 1,
    "name": "Product 1",
    "description": "bla",
    "stock": 20,
    "image": "gmail.com",
    "price": 10
}
```
Else if ID doesnt exists, return a JSON like this:
```json
{
    "statusCode": 404,
    "message": "Product 4 not found",
    "error": "Not Found"
}
```
### POST
- /products *require a JSON*
If the JSON is correct, return a JSON with the data and a new ID, like this:
```json
{
    "id": 3,
    "name": "Product 2",
    "description": "bla bla",
    "stock": 300,
    "image": "facebook.com",
    "price": 1
}
```
Else if there is missing or extra information, return a JSON with the error, like this:
```json
{
    "statusCode": 400,
    "message": [
        "image should not be empty",
        "image must be an URL address"
    ],
    "error": "Bad Request"
}
```
### PUT
- /products/:id *require a JSON*
If the ID exists and the data is correct, return a JSON with the modified product like this:
```json
{
    "id": 1,
    "name": "Product 1",
    "description": "bla",
    "stock": 20,
    "image": "gmail.com",
    "price": 200
}
```
If the ID doesnt exist, return a JSON like this:
```json
{
    "statusCode": 404,
    "message": "Product 5 not found",
    "error": "Not Found"
}
```
And if the data is incorrect, return a JSON like this:
```json
{
    "statusCode": 400,
    "message": [
        "price must be a positive number"
    ],
    "error": "Bad Request"
}
```
### Delete
- /products/:id
If the ID exists, delete the product and return an void array.
