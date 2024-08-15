# User Creation API Documentation

## Overview
This API endpoint allows for the creation of a new user in the system. It accepts user details through a POST request and returns the created user data along with a status message.

## API Endpoint
**URL:** `http://localhost:5000/user/create`

**Method:** `POST`

## Request Data

The API expects the following JSON data in the request body:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "123@gmail.com",
  "password": "123",
  "role": "user"
}
