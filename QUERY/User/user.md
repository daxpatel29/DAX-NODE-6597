# USERS QUERIES


#  Find all the female users;

```js
db.users.find({gender: "female"})

````


# Find all the female users who speak one of the two languages Kannada, Hindi


``` css
db.users.find({gender: "female", language: {$in: ["Kannada", "Hindi"]}})

```
# Find all the male users who can speak Hindi and female users who can speak Kannada

```js

db.users.find({$or: [{gender: "male", language: "Hindi"}, {gender: "female", language: "Kannada"}]})
```

# Find all the users who wear the shirt size S
```js
db.users.find({shirt_size: "S"})
```

# Find all the female users who wear the shirt size XL


``` css
db.users.find({gender: "female", shirt_size: "XL"})

```
