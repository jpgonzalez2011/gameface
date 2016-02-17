## Minimum Viable Product

GameFaces is an app inspired by Facebook for the Faces of Video Games:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Users can create account through OmniAuth with Facebook.
- [x] Users can login through OmniAuth with Facebook.
- [x] Users have profile pages.
      - Personal Information (About)
      - Profile Picture
      - Cover Picture
      - Display Area for Posts
- [x] Users can make posts (text).
- [x] Users can upload pictures.
- [x] User pictures are displayed in main index.
- [x] Users can comment on posts (text comments).
- [x] Users can post photos.
- [x] App displays full size photos in modal window.
- [x] Users can comment on photos (text comments).
- [x] Users can become friends with other users.
- [x] Users can view posts made by their friends via a main feed.
- [x] App allows searching by User’s name or username.
- [ ] Users can update cover photos and profile pictures.

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/wireframes/GameFaceWireframes.pdf
[schema]: ./docs/DatabaseSchema.pdf

## Implementation Timeline

### Phase 1: User Authentication, Login/Logout, JSON API for user Account Creation and User Sessions (1 day)

I will begin by implementing User Authentication using BCrypt. I will create a
JSON API for User sign up and to allow users to Login and Logout. I will create
a basic landing page for signing up / logging in, which will be modified later on.
Intention will be to redirect Users to their Profile upon signup/login.

[Details][phase-one]

### Phase 2: Flux Architecture for User Profiles, Post CRUD (1.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. I will create the Flux Architecture for
User Profile Pages and Rails backend for Posts CRUD. Photo components will be
filled with placeholders pending implementation of file uploads.


[Details][phase-two]

### Phase 3: Flux Architecture for Posts, Rails Backened for Comments and Likes (1 days)

I will implement the Flux architecture for creating, editing, displaying and
destroying posts. I will also begin implementation of commenting and liking of posts.


[Details][phase-three]

### Phase 4: Flux Architecture for Comments CRUD and list Implementation of File Uploads. (1.5 days)

File upload likely iomplemented using Filepicker.io

[Details][phase-four]

### Phase 5: Friendships and Timeline (2 day)

I will implement friendships between users and begin implementation of the timeline
view for users. The App will also differentiate views for friends and nonfriends of users.

[Details][phase-five]

### Phase 6: Users Search and Round 1 of Seeding (1 day)

I will implement searching of users by their name and begin seeding the
database with users, friendships and content (photos, posts, comments, likes).

[Details][phase-six]

### Extension Features (TBD)
- [ ] Users can chat with friends.
- [ ] App notifies users of particular actions on site.
- [ ] App allows searching of posts via posting user, text content or hash tags.
- [ ] Users can be tagged in posts and pictures.
- [ ] Users can play games and track progress versus other users.
- [ ] App suggests friends based on common friends/personal information between users.
- [ ] Multiple sessions with geolocation.
- [ ] App provides trending topics feed.
- [ ] Infinite scroll for main feed and profile feed.
- [ ] Real time updating of timeline, comments, likes, notifications.
- [ ] Users can post life events.
- [ ] Users can comment with pictures.
- [ ] App has privacy permissions based on friend status.
- [ ] App provides reminders of friends' birthdays and other significant events.
- [ ] App provides snapshots of past events (similar to "On this Day" feature).

[phase-one]: ./phases/phase1.md
[phase-two]: ./phases/phase2.md
[phase-three]: ./phases/phase3.md
[phase-four]: ./phases/phase4.md
[phase-five]: ./phases/phase5.md
[phase-six]: ./phases/phase6.md
