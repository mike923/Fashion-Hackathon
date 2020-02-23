<img src="https://avatars1.githubusercontent.com/u/5825944?s=200&v=4" width="100px" style="text-align: center;">

# Comprehensive Technical Assessment - Practical

## Opening Remarks

This exam, like many exams before it, will be an **open-book, project-driven exam**.

- You are permitted the use of online resources, including your notes.
- **You are not permitted to discuss the exam with your peers or to share code.** If you have questions, or would like to discuss details of the exam, please talk to an instructor or IA.
  - Instructors will explicitly look for similar code.
- You are welcome (encouraged, required) to utilize GitHub and Git for this exam. Until the conclusion of the exam period, please **make your repositories private** and invite the staff as collaborators to your repo.
- As you continue to work through this project make regular commits because we will be monitoring your commit history for code consistency and educational integrity.

## TV Show Watchlist App

TV Show Watchlist will be a full-stack application where users can post, comment on, and favorite TV shows that they are binging on.

- The app does **not** need user authentication, and does not need passwords - only usernames. You can assume from the front end that your logged in user is any user from the database.
- Users should be able to **add shows** that they watch. These shows are shared on their profile pages.
- Users can view the profile pages of other users.
- Users should be able to **add comments** on other users' shows. Comments should include the comment's text as well as the username of the user who posted the comment.

## Database Structure

The following tables and columns will be necessary:
![database schema diagram](./assets/schema_diagram.png)

- **Users**
  - id
  - username - _Unique_
  - avatar_url 

- **Genres**
  - id
  - genre_name - _Unique_

- **Shows**
  - id
  - title
  - img_url
  - user_id - _References Users_
  - genre_id - _References Genres_

- **Comments**
  - id
  - comment_body
  - user_id - _References Users_
  - show_id - _References Shows_

> You may use the included [seed.sql](/seed.sql) file.

## API Endpoints

Your API Endpoints should include at least:

- **Users**

  | Method | Endpoint     | Description           | Body Data                |
  | ------ | ------------ | --------------------- | ------------------------ |
  | GET    | `/users`     | Get all users         | n/a                      |
  | GET    | `/users/:id` | Get single user by id | n/a                      |
  | POST   | `/users/`    | Add new user          | `avatar_url`, `username` |

- **Genres**

  | Method | Endpoint  | Description    | Body Data    |
  | ------ | --------- | -------------- | ------------ |
  | GET    | `/genres` | Get all genres | n/a          |
  | POST   | `/genres` | Add new genre  | `genre_name` |

- **Shows**

  | Method | Endpoint                 | Description                         | Body Data                                 |
  | ------ | ------------------------ | ----------------------------------- | ----------------------------------------- |
  | GET    | `/shows`                 | Get all shows                       | n/a                                       |
  | GET    | `/shows/:id`             | Get single show by id               | n/a                                       |
  | POST   | `/shows`                 | Add new show                        | `title`, `img_url`, `user_id`, `genre_id` |
  | GET    | `/shows/genre/:genre_id` | Get all shows for specific genre_id | n/a                                       |
  | GET    | `/shows/user/:user_id`   | Get all shows for specific user_id  | n/a                                       |

- **Comments**

  | Method | Endpoint                  | Description                           | Body Data                            |
  | ------ | ------------------------- | ------------------------------------- | ------------------------------------ |
  | GET    | `/comments/show/:show_id` | Get all comments for specific show_id | n/a                                  |
  | POST   | `/comments`               | Add new comment                       | `comment_body`, `user_id`, `show_id` |


## Frontend

Your frontend must include the following routes/pages. Note that these are not all the routes that may be required, these are just the frontend routes that display something.

### Routes
| Route                         | Feature                                                                                                                                                                                                                                                                                                    |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`/`**                       | Home route. Should just welcome the user to the application. Must include Navbar, links, display message.                                                                                                                                                                                                  |
| **`/users`**                  | Shows master list of all users. Shows the "logged in" user. Should be able to click on each username linking to the user profile page.                                                                                                                                                                     |
| **`/users/:id`**              | User profile page. Shows all the shows the user is watching. Must show the image, title, genre. Should be able to click on the show and take you to the show page.                                                                                                                                         |
| **`/users/:id/addShow`**      | Shows a form where the logged in user can add a new show. Should be able to submit to the Database. These changes are reflected app wide. Selecting the genre is a drop down. This data should be reflecting the genres in the database.                                                                   |
| **`/shows`**                  | Masterlist of all the shows. **Don't repeat the same show twice.** For each show list all the users who are watching. Clicking on the name of the user takes you to that specific users' show profile page. We are assuming that the name of the show has to match exactly to be considered the same show. |
| **`/shows/:id/user/:userId`** | A specific show's profile page for a specific user. Shows the title, image, genre, number of comments and list of comments. Allows you to add new comments. The comment should be reflected immediately on the list without needing to refresh the page.                                                   |
| **`/about`**                  | Shows short description of what this app is about and who made it                                                                                                                                                                                                                                          |

### Wireframes 
Find wireframes [here](./wireframes.pdf).

## Submission Guidelines

* Create a new **private** repository (or two, depending on how you choose to architect your application) on your GitHub. Invite all your instructor as collaborators so they can view your progress.
* As soon as you have created your repo(s) submit the link(s) on [canvas for this assignment](https://canvas.instructure.com/courses/1605748/assignments/13722707)
* Build your application, making regular, descriptive commits!
* When finished, submit on [canvas for this assignment](https://canvas.instructure.com/courses/1605748/assignments/13709184) the link(s) to your repo(s). If you deployed your app, also include the links to the deployed versions.
* Mention anything you'd like specific feedback on.

## BONUS (pick one or more!)

**DO ATTEMPT ANY OF THESE UNLESS YOU ARE DONE WITH THE SPECIFICATIONS WE ASKED FOR IN YOUR APP ABOVE**

- There is some repetition going on in your database, more specifically in the `shows` table. Create a separate `shows_users` table with columns `id`, `user_id` and `show_id` that associates users with shows. If a user is adding a show, check that the show is not already in the `shows` table. If the show is in the `shows` table just associate such user with that `show` in the `show_users` otherwise add the show to the `shows` table and also the association in the `shows_users` table. Adjust your routes and queries to make this still comply with the specifications.
- Deploy your application on heroku & netlify
- Make one of your endpoints (e.g. comments or users) support full CRUD using all 4 HTTP verb methods:
    - GET for Read
    - POST for Create
    - PUT for Update
    - DELETE for Delete
- Use redux for your state management 
- Add user authentication so that users can register and sign in.

## Standards

- EF.10
  - EF.10.c
  - EF.10.f
- FSW.5
    - FSW.5.b
    - FSW.5.c
    - FSW.5.d
    - FSW.5.e
    - FSW.5.f
    - FSW.5.h
- FSW.6
    - FSW.6.a
- FSW.10
    - FSW.10.a
    - FSW.10.b
- FSW.11
    - FSW.11.b
- FSW.14
    - FSW.14.c

## Rubric

![rubric](./assets/WebCTARubric.png)
