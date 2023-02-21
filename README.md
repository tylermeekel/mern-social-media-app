# Social Media App
## Technologies Used
- React for frontend
- TailwindCSS for frontend styling
- Axios to fetch data through the backend
- MongoDB and MongoDB Atlas for database
- Express.js/Node.js for backend routing

## Current Implemented Features
### Front End
- Header (currently has unimplemented link to add new Post)
- Home Page (loads all Posts from DB)
- Create New Posts

### Back End
- Route to get all posts as a JSON object
- Route to get individual post as a JSON object from id
- Route to create individual post
- Route to update individual post
- Route to delete individual post

### Database
- Unfinished Post model implementation

## Future Planned Features
### Front End
- Ability to delete individual post
- Ability to update individual post
- Ability to view individual post in greater detail
- Ability to like posts
- Ability to comment (low priority)
- Login form
- Restricted access to delete, update through use of JWT

### Back End
- CRUD setup for User model
- Implement authentication (using bcrypt and JSON web tokens)
- Restrict access to routes depending on authentication status

### Database
- Finish Post model, adding userID field, likes, etc.
- Create model for User
- Potentially figure out how to integrate local hosting for MongoDB