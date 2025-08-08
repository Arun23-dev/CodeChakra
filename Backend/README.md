
# CodeChakra Backend  

## A RESTful API for the CodeChakra platform like the leetcode where users can register ,login , view coding problems,submit solitions track progress,and many more.The backend handles authentication ,problem data ,submissions, and user profiles.

## Tech Stack
- Nodejs
- Expressjs 
- MongoDB with mongoose
- jWT for the Authentication 
- Bcrypt for the password Hashing 
- Redis for the rate limiting and caching 


## Folder Structure
```
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── Config
    │   ├── db.js
    │   └── redis.js
    ├── controllers
    │   ├── userAuthent.js
    │   ├── userProblem.js
    │   └── userSubmission.js
    ├── index.js
    ├── middleware
    │   ├── adminMiddleware.js
    │   └── userMiddleware.js
    ├── models
    │   ├── problem.js
    │   ├── submission.js
    │   └── user.js
    ├── routes
    │   ├── codeSubmit.js
    │   ├── problemCreator.js
    │   └── userAuth.js
    └── utils
        ├── problemUtility.js
        └── validate.js

```

##  Installation 
```bash
git clone https://github.com/yourusername/codechakra-backend.git
cd Backend
npm install
```

## Create Environment Variable s
```
PORT=5000
DB_CONNECT_KEY=mongodb+srv://ArunChaudhary:,password>@codingarun.s0s5cqm.mongodb.net/
REDIS_KEY=bGv2N1JjfjjjjfjfjjfLLhKx09N01xDo0GIihoG37Yx3
REDIS_PORT=18555
REDIS_HOST=redis-18555.c11.us-east-1-3.ec2.redns.redis-cloud.com
```

### Run App
```
-- Start the developmental server
node index.js

--production 

```

## Problem  EndPoints
| Method | Endpoint      | Description                 |
|--------|---------------|-----------------------------|
|post    | /api/problemCreate |jfjfjjfjfjjf                 |
|post    |ProblemUpdate  |
|        |
|        |

## Problem EndPoints

| Method | Endpoint      | Description                 |
|--------|---------------|-----------------------------|
| GET    | /api/problems | Get all problems             |
| POST   | /api/problems | Create new problem (admin)  |
| GET    | /api/problems/:id | Get problem by ID          |







## Future Improvements
- Leaderboards to track top users.
- Code Judge (via Docker or external API) for running code and validating submissions.
- Team Collaboration features to allow users to work on problems together.

## Contributing
We welcome contributions, suggestions, and feedback. Please feel free to create a Pull Request or open an issue for any suggestions!

## Author
Arun Chaudhary
LinkedIn | GitHub

