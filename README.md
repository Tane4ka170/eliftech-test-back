# Event Management API

## Overview

This project is an Event Management API built using Node.js, Express, and MongoDB. The API allows users to perform operations related to events, including fetching events, adding participants, and retrieving event participants.

## Features

▫︎ Fetch paginated list of events
▫︎ Add participants to an event
▫︎ Get participants of a specific event

## Technologies Used

▫︎ Node.js
▫︎ Express.js
▫︎ MongoDB (Mongoose)
▫︎ Joi for validation
▫︎ dotenv for environment variable management

## Prerequisites

Node.js (v14.x or higher)
MongoDB

## Getting Started

### Installation

1. Clone the repository:

git clone https://github.com/Tane4ka170/eliftech-test-back.git

2. Navigate to the project directory:

cd eliftech-test-back

3. Install the dependencies:

npm install

4. Create a .env file in the root directory and add your MongoDB connection string:
   DB_HOST=your_mongodb_connection_string

### Running the Server

1. Start the server:
   npm start
   The server will start on port 7391 by default.

## API Endpoints

Fetch Events
▫︎ Endpoint: GET /api/events
▫︎ Query Parameters:
▪︎page: Page number for pagination (optional, defaults to 1)
▪︎ limit: Number of events per page (optional, defaults to 10)

Response:

{
"totalEvents": 100,
"events": [
{
"\_id": "60c72b1f9b1d8b001e8e5c3b",
"title": "Event Title",
"description": "Event Description",
"event_date": "2023-05-15",
"organizer": "Organizer Name",
"participants": []
},
...
]
}

Add Participant to Event

▫︎ Endpoint: POST /api/events/:id
▫︎ Path Parameters:
▪︎ id: Event ID

Request Body:

{
"fullName": "John Doe",
"email": "johndoe@example.com",
"dateOfBirth": "1990-01-01",
"source": "friends"
}

Response:

{
"\_id": "60c72b1f9b1d8b001e8e5c3b",
"title": "Event Title",
"description": "Event Description",
"event_date": "2023-05-15",
"organizer": "Organizer Name",
"participants": [
{
"fullName": "John Doe",
"email": "johndoe@example.com",
"dateOfBirth": "1990-01-01",
"source": "friends"
}
]
}

Get Event Participants
▫︎ Endpoint: GET /api/events/:id
▫︎ Path Parameters:
▪︎ id: Event ID

Response:

{
"\_id": "60c72b1f9b1d8b001e8e5c3b",
"title": "Event Title",
"participants": [
{
"fullName": "John Doe",
"email": "johndoe@example.com",
"dateOfBirth": "1990-01-01",
"source": "friends"
},
...
]
}

## Middleware

### Error Handling

▫︎ ctrlWrapper: Wraps controllers to handle exceptions and pass them to the error handler.
▫︎ handleMongooseError: Handles Mongoose-specific errors.
▫︎ HttpError: Custom error class for handling HTTP errors.
▫︎ isEmptyBody: Validates that the request body is not empty.
▫︎ isValidId: Validates MongoDB ObjectIDs.
▫︎ validateBody: Validates request body against a given Joi schema.

## Models

### Event Model

▫︎ Schema:

{
title: String,
description: String,
event_date: String,
organizer: String,
participants: [
{
fullName: String,
email: String,
dateOfBirth: Date,
source: String
}
]
}

▫︎ Validation Schema
userRegister: Joi schema for validating participant data.

## Routes

▫︎ Event Routes: Defined in routes/api/events.mjs
▪︎ GET /api/events: Fetch events
▪︎ POST /api/events/:id: Add participant to event
▪︎ GET /api/events/:id: Get event participants

## License

This project is licensed under the MIT License.

## Acknowledgements

Express.js for the web framework
Mongoose for MongoDB ODM
Joi for validation
Feel free to contribute to this project by submitting issues or pull requests. For any questions or suggestions, please contact [tane4ka170@gmail.com].
