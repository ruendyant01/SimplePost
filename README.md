
# Post App

An app for posting




## Tech Stack

**Client:** React, React-query, Next Js, Chakra UI, React Hook Form

**Server:** Laravel


## Environment Variables

To run this project, you will need to change the following environment variables to your .env file

`API_URL` : `http://localhost:8000`


## Run Locally

Clone the project

```bash
  git clone https://github.com/ruendyant01/SimplePost.git
```
Go to the project directory

```bash
  cd SimplePost
```

on Backend / Server
*Don't forget to change the database connection in .env file*

Go to directory

```bash
  cd Backend
```

Install dependencies

```bash
  php artisan db:migrate
  php artisan db:seed
```

Start the backend server

```bash
  php artisan serve
```

on Frontend / Client  

Go to directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the frontend server

```bash
  npm run dev
```


## API Reference

#### Get all post

```http
  GET /api/post
```

#### Get single post 

```http
  GET /api/post/${slug}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `slug`      | `string` | **Required**. Slug of post to fetch |

#### Make post

```http
  POST /api/post/
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Post Title |
| `body`      | `string` | **Required**. Post Body Text / Content |


#### Update post

```http
  PATCH/PUT /api/post/{$slug}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `slug`      | `string` | **Required**. Slug of post to fetch |


| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Post Title |
| `body`      | `string` | **Required**. Post Body Text / Content |


#### Delete post

```http
  DELETE /api/post/{$slug}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `slug`      | `string` | **Required**. Slug of post to fetch |  


## Screenshots

![Home Screenshot](https://i.imgur.com/iGNUhU2.png)  
![Detail Screenshot](https://i.imgur.com/wrZXgBw.png)

