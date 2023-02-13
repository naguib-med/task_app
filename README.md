##  A Simple example of a task API using NodeJS, Express, Mongoose and MongoDB

### Installation

1. Clone the repository
   `git clone this-repo`
2. Install dependencies
   `npm install`
3. Start the server
   `node app.js`
4. Open your browser and go to `http://localhost:3000`
5. You can use Postman to test the API

### How to use the API

1. Create a new task
    `POST api/tasks`
2. Get all tasks
    `GET api/tasks`
3. Get a single task
    `GET api/tasks/:id`
4. Get all tasks with a specific status
      `GET api/tasks/:status`
5. Get all tasks with a specific priority
   `GET api/tasks/:priority`
6. Update a task
    `PUT api/tasks/:id`
7. Delete a task
    `DELETE api/tasks/:id`
8. Delete all tasks
    `DELETE api/tasks`

### Examples
Example using to fetch all tasks with a specific status:

    GET api/tasks/pending

Example using to fetch all tasks with a specific priority:

    GET api/tasks/high

Example using to update a task:

    PUT api/tasks/5c9b5b9b9b9b9b9b9b9b9b9b
    {
        "title": "Task 1",
        "description": "This is a task",
        "status": "completed",
        "priority": "high"
    }

Example using to delete a task:

    DELETE api/tasks/5c9b5b9b9b9b9b9b9b9b9b9b

Example using to delete all tasks:

    DELETE api/tasks

Example using to create a new task:

    POST api/tasks
    {
        "title": "Task 1",
        "description": "This is a task",
        "status": "pending",
        "priority": "high"
    }

### License

It's free to use. 