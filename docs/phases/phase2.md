# Phase 2: Flux Architecture for User Profiles, Post CRUD.

## Rails
### Models
  - Profile Photo
  - Cover Photo
  - Post

### Controllers
  - Profile Photos
  - Cover Photos
  - Posts

### Views
  - ProfilePhotos - jbuilder
  - CoverPhotos - jbuilder
  - Posts - jbuilder

## Flux
### Views (React Components)
  - App
    - Main
      - Navigation Header 
    - Profile
      - Cover Photo
      - Left Profile Information
        - Profile Picture
        - Friends Container
      - Right Content Container
        - Navigation Bar (About, Wall, Friends)
          - Wall
            - Post Form
            - Posts Display/Index
          - About
            - Left Navigation Pane
              - Right Content Pane
          - Friends
            - Friends Listing
### Stores
- Profile

### Flux API Actions
  Create Post
  Edit Post
  Destroy Post
  Receive Posts
  
###Flux API Util
  FetchPosts
  FetchOnePost
  UpdatePost
  DestroyPost
  CreatePost
###Flux Components
  Posts Display/Index
    - *Post*
