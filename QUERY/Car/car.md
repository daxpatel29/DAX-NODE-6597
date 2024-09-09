# CARS QUERIES MONGODB:
 
# Men who own a Pink car

```css
db.cars.find({ gender: "Male", car_color: "Pink" });
```

# Women who own a Red or a Blue Car:

```c++
db.cars.find({ gender: "Female", car_color: { $in: ["Red", "Blue"] } });
```

# Men who purchased the car in the year 1998:

```c++
db.cars.find({ gender: "Male", purchase_year: "1998" });
```

# Women who purchased a Yellow car in the year 1985:

```java
db.cars.find({ gender: "Female", purchase_year: "1985" });
```

# Men who either have a Red or Green car and either live in Germany or Kenya:

```js
db.cars.find({
  gender: "Male",
  car_color: { $in: ["Red", "Green"] },
  country: { $in: ["Germany", "Kenya"] },
});
```

# People from India who purchased cars in the year 2001:

```js
db.cars.find({ country: "India", purchase_year: "2001" });
```

# People from Germany or Egypt who purchased cars in the year 1998 or 1992:

```js
db.cars.find({
  country: { $in: ["Germany", "Egypt"] },
  purchase_year: { $in: ["1998", "1992"] },
});
```

# Women from India who own a Blue car:

```js
db.cars.find({ gender: "Female", country: "India", car_color: "Blue" });
```

# Men from Germany who purchased cars in 1998 and Men from Egypt who purchased cars in 1992

```css
db.cars.find({
  $or: [
    { gender: "Male", country: "Germany", purchase_year: 1998 },

    { gender: "Male", country: "Egypt", purchase_year: 1992 },
  ],
});
```

# Women who own a Green car and are not from Pakistan:

```js
db.cars.find({
  gender: "Female",
  car_color: "Green",
  country: { $ne: "Pakistan" },
});
```
