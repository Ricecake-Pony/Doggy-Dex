# Doggy Dex
> This is a web application for users to browse and find dogs that fit their lifestyle/desires.

## Table of Contents
1. [Motivation]
1. [Demo](#Demo)
1. [Tech](#Tech)
1. [Features](#Features)
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Installing Dependencies](#installing-dependencies)

## Motivation
> I have always loved dogs, yet it wasnt until I worked as a dog handler in Alaska that I understood the amount of responsibility that goes into caring for a dog. This application was designed for people to find a dog that best fits their lifestyle or desires so they know what to expect from the dog breed. This is to ensure dogs and owners alike can be more on the same page!

## Demo


## Tech
* Front End
  * React, reactHooks
  * Material UI/ Styled Components 
  * localStorage

* Backend
  * Ruby on Rails
  * Bcrypt gem
  * JWT

## Features
* Custom Database implementing Active Record and Ruby on Rails. Includes: serializers, validations, custom controller actions, and has full CRUD.
* Front End using React.js, has client-side routing, facilitates CRUD actions & utilizes useContext for loggedIn Users.
* Included Signup/Login features complete with authorization and authentication via Bcrypt gem and JWT/local storage. 


## Usage

>  

npm install, npm start

You can look at the migrations and seeds within the file itself to look at the data on the backend and how it was set up.
Then run rake db:migrate db:seed

## Requirements

- Ruby 3.1.0
- React 18.0.0 or greater

### Installing Dependencies

From within the root directory:

```
npm install 
bundle install
```
