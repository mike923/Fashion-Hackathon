# Hackathon-Content

## Database Structure

![database schema diagram](./assets/schema_diagram.png) 

## API Endpoints

Your API Endpoints should include at least:

- **Users**

  | Method | Endpoint       | Description           | Body Data                |
  | ------ | -------------- | --------------------- | ------------------------ |
  | GET    | `/users`       | Get all users         | n/a                      |
  | GET    | `/users/:id`   | Get single user by id | n/a                      |
  | GET    | `/users/:type` | Get all users by type | n/a                      |
  | POST   | `/users/`      | Add new user          | `avatar_url`, `username` |

- **Types**

  | Method | Endpoint | Description   | Body Data   |
  | ------ | -------- | ------------- | ----------- |
  | GET    | `/types` | Get all types | n/a         |
  | POST   | `/types` | Add new type  | `type_name` |

- **designs**

  | Method | Endpoint                                             | Description                                        | Body Data                                                           |
  | ------ | ---------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------- |
  | GET    | `/designs`                                           | Get all designs                                    | n/a                                                                 |
  | GET    | `/designs/:id`                                       | Get single show by id                              | n/a                                                                 |
  | POST   | `/designs`                                           | Add new design                                     | `design_file`, `color`, `pattern`, `height`, `width`, `designer_id` |
  | GET    | `/designs/manufacture_design/:manufacture_design_id` | Get all designs for specific manufacture_design_id | n/a                                                                 |

- **Manufacture_Design**

  | Method | Endpoint                  | Description                            | Body Data                                            |
  | ------ | ------------------------- | -------------------------------------- | ---------------------------------------------------- |
  | GET    | `/manufacture_design/:id` | Get manufacture_design for specific id | n/a                                                  |
  | POST   | `/manufacture_design`     | Add new manufacture_design             | `manufacture_name`, `material_id`, `percentage_used` |

- **Materials**

  | Method | Endpoint     | Description       | Body Data  |
  | ------ | ------------ | ----------------- | ---------- |
  | GET    | `/materials` | Get all materials | n/a        |
  | POST   | `/materials` | Add new material  | `material` |

## Frontend

### Routes

| Route                               | Feature                                                                                                                                                                                                                                                                         |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`/`**                             | Home route. Should just welcome the user to the application. Must include Navbar, links, display message.                                                                                                                                                                       |
| **`/users`**                        | Shows master list of all users. Shows the "logged in" user. Should be able to click on each username linking to the user profile page.                                                                                                                                          |
| **`/users/:id`**                    | User profile page. Shows all the shows the user is watching. Must show the image, title, genre. Should be able to click on the show and take you to the show page.                                                                                                              |
| **`/users/type/:id/addOrder`**      | Designers or Manufacuters can add or accept a work order. Should be able to submit to the Database. These changes are reflected app wide. Type is selected from the user database. This data should be reflecting the design and material and maufacture order in the database. |
| **`/shows/:id/product/:productId`** | A specific show's profile page for a specific user. Shows the title, image, genre, number of comments and list of comments. Allows you to add new comments. The comment should be reflected immediately on the list without needing to refresh the page.                        |
| **`/about`**                        | Shows short description of what this app is about and who made it                                                                                                                                                                                                               |

## Wireframes

[Wireframes Here](https://drive.google.com/file/d/1KQ2z8IbZoSGUyCkqvfS9Y1ARqCrC7OZc/view?usp=sharing)
