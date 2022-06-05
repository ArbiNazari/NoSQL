
# Challenge18 - NoSQL Challenge: Social Network API 
![badge](https://img.shields.io/badge/license-apache-blue)


  ## Table-of-Contents
  * [Description and Task](#description)
  * [Video](#video)   
  * [License](#license)   
  * [Contributing](#contributing)
  * [Questions](#questions)


 ## [Description](#table-of-contents)
 
 Application Design and Function

As a social media startup, I want an API for my social network that uses a NoSQL database
that my website can handle large amounts of unstructured data.


 # My Task and Application Requirments

  - GIVEN a social network API - WHEN I enter the command to invoke the application.

  - THEN my server is started and the Mongoose models are synced to the MongoDB database 
    when I open API GET routes in Insomnia for users and thoughts.

  - Then the data for each of these routes is displayed in a formatted JSON when
    I test API POST, PUT, and DELETE routes in Insomnia.

  - Then I am able to successfully create, update, and delete users and 
    thoughts in my database when I test API POST and DELETE routes in Insomnia.

  - Then I am able to successfully create and delete reactions to thoughts 
    and add and remove friends to a user’s friend list


  ## Models: 

    # User

    username
        String
        Unique
        Required
        Trimmed

    email
        String
        Required
        Unique
        Must match a valid email address (look into Mongoose's matching validation)

    thoughts
        Array of _id values referencing the Thought model

    friends
        Array of _id values referencing the User model (self-reference)

    # Thought

    thoughtText
        String
        Required
        Must be between 1 and 280 characters

    createdAt
        Date
        Set default value to the current timestamp
        Use a getter method to format the timestamp on query

    username (The user that created this thought)
        String
        Required

    reactions (These are like replies)
        Array of nested documents created with the reactionSchema

# Schema Settings

Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

   # Reaction (SCHEMA ONLY)

    reactionId
        Use Mongoose's ObjectId data type
        Default value is set to a new ObjectId

    reactionBody
        String
        Required
        280 character maximum

    username
        String
        Required

    createdAt
        Date
        Set default value to the current timestamp
        Use a getter method to format the timestamp on query

# Schema Settings

This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

## API Routes

/api/users

    GET all users

    GET a single user by its _id and populated thought and friend data

    POST a new user:

// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}

    PUT to update a user by its _id

    DELETE to remove user by its _id

# BONUS: Remove a user's associated thoughts when deleted.

/api/users/:userId/friends/:friendId

    POST to add a new friend to a user's friend list

    DELETE to remove a friend from a user's friend list

/api/thoughts

    GET to get all thoughts

    GET to get a single thought by its _id

    POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}

    PUT to update a thought by its _id

    DELETE to remove a thought by its _id

/api/thoughts/:thoughtId/reactions

    POST to create a reaction stored in a single thought's reactions array field

    DELETE to pull and remove a reaction by the reaction's reactionId value


  
  ## [Video](#table-of-contents)
 
   - Video Start- Users Section- [video guide](https://www.awesomescreenshot.com/video/9287649?key=8578e4160bac2c071457a538745c3a65)
   - Video Start- Thoughts Section- [video guide](https://www.awesomescreenshot.com/video/9287858?key=2f91f537a7debc129448d7fae1eb24bf)


![1](https://user-images.githubusercontent.com/95839411/172073458-8fd0314f-3d4c-406e-9d2b-7afdae30cdb2.jpg)

![2](https://user-images.githubusercontent.com/95839411/172073463-2882c542-ee6c-4f1b-8e70-3f1c2a771b93.jpg)

![3](https://user-images.githubusercontent.com/95839411/172073468-a82183da-3b7d-4376-b2d3-07e58412e9c6.jpg)

![4](https://user-images.githubusercontent.com/95839411/172073472-fc9cea88-c591-4887-8a05-6e8e15458f31.jpg)



  ## [License](#table-of-contents)
  The application is covered under the following license:
  
  [apache](https://choosealicense.com/licenses/apache)
    
    
  ## [Contributing](#table-of-contents)
  
    Feel free to contact me if there are any issues or ideas to implement.
    
  ## [Questions](#table-of-contents)
  Contact Information Below:
  [GitHub](https://github.com/arbinazari)

  [Email: arbinazari@hotmail.com](mailto:arbinazari@hotmail.com)
....
