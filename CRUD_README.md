CRUD functionality for present service with express server + MongoDB


CREATE
Creates new document or data record in 'reviews' collection.

Request Details
Route - '/api/reviews'
Type - 'POST'
Request Body - Object with query and values property on it
Request Response - On success sends newly created document or record to client
Response code - On success - 201, on error - 500


READ
Reads one document or data record in 'reviews' collection for given ID.

Request Details
Route - '/api/reviews'
Type - 'GET'
Request Query -  Contains ID for document or record to read
Request Response - On success sends document or record with requested ID to client
Response code - On success - 200, on error - 500


UPDATE
Updates document or data record in 'reviews' collection for given ID.

Request Details
Route - '/api/reviews'
Type - 'PUT'
Request Body - Object with query and values property on it
Request Response - On success sends updated document or record to client
Response code - On success - 201, on error - 500


DELETE
Deletes document or data record in 'reviews' collection for given ID.

Request Details
Route - '/api/reviews'
Type - 'DELETE'
Request Query - Contains ID for document or record to delete
Request Response - On success sends deleted document or record to client
Response code - On success - 200, on error - 500
