# GameFaces


### Welcome to GameFaces

GameFaces is a technical recreation of Facebook built as a single page app with Ruby on Rails and React.js. GameFaces' single-page app design has zero full page refreshes, allowing for a fast and smooth user experience.

[Live](http://www.gamefaces.xyz)

**Screenshots**

[![screenshot1](/app/assets/screenshots/screenshot1.png)](http://www.gamefaces.xyz/)
[![screenshot2](/app/assets/screenshots/screenshot2.png)](http://www.gamefaces.xyz/)

###Features

- [x] Login and Account Creation through Facebook.
- [x] Users have profile pages.
      - Personal Information (About)
      - Profile Picture
      - Cover Picture
      - Display Area for Posts
      - Index of Friends.
- [x] Users can make posts.
- [x] Users can upload photos.
- [x] Users can comment on posts and photos.
- [x] Photos are displayed through a modal window.
- [x] Users can become friends with other users.
- [x] Users can view posts made by their friends via a main feed.
- [x] App allows users to have multiple simultaneous logins.
- [x] Dynamic search of users by name and username that updates as a query is entered.
- [x] Users have Top Friends that are updated in real time with every user interaction.

### Languages

- Ruby
- JavaScript
- HTML/CSS

### Frameworks / Libraries

- Rails
- React.js with Flux
- React Router
- jQuery

### Gems / Services

- ActiveRecord
- BCrypt
- OmniAuth
- Paperclip
- PgSearch
- Amazon Web Services (Simple Storage Service)
- Heroku

### A Fun Implementation Detail

Top Friends are updated in real time by leveraging the relationship between Flux Stores and the Flux Dispatcher.

Every user action eventually creates a dispatch. The FriendStore listens for all such dispatches, even if the intended destination of the payload is another Store, such as the PostStore or CommentStore. When the FriendStore hears a dispatch relating to user interaction it identifies the users between which the interaction has taken place. That data is then passed to the FriendApiUtil which initiates an Ajax request to update the Friendship between those two users.

This aspect of having a universal listener on the FriendStore allows for the real time updates of Top Friends. In later features, this type of arrangement will allow for real time updating of other data points (such as suggested friends and visualizations of user activity on the site).

### Todo - First Extension of Features

- [ ] Users can chat with friends.
- [ ] Users can like posts, photos and comments.
- [ ] App notifies users of particular actions on site.
- [ ] App allows searching of posts via posting user, text content or hash tags.
- [ ] Users can be tagged in posts and pictures.
- [ ] Users can play games and track progress versus other users.
- [ ] App suggests friends based on common friends/interactions between users.
- [ ] Data visualizations of user activity on the site.
