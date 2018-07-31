# Data Types

**Motivation:** Standardizing these types between applications will enable multiple developers to work on projects in parallel and use the results from each others' projects without additional need for translation or time spent agreeing on a standard. `JSON` is interpretable by all modern languages (Python, C++, Javascript, Matlab, Ruby, PHP, Rust, etc...) usually without need for any additional libraries. This enables results from our programs to be used by other people with little trouble, and provides verifiable consistency across all of our applications.

Here are the types that the visualizer expects, as well as some examples. If you want to verify the JSON against these schemas, try using [this JSON validator](https://www.jsonschemavalidator.net/). A good way to visualize the structure of the schemas is to use [this visualizer](https://navneethg.github.io/jsonschemaviewer/) which builds a tree out of what the schema describes.

## Charger

This type represents any abstract charger that may be located at a station. The `charger.power` value will be in `kW`.

**Schema:**

```json
{
  "type" : "object",
  "properties" : {
    "power" : {
      "type" : "number",
      "minimum" : 0,
      "maximum" : 1000
    },
    "level" : {
      "type" : "number",
      "multipleOf" : 1,
      "minimum" : 1,
      "maximum" : 4
    }
  },
  "required" : [ "power", "level" ],
  "additionalProperties" : false
}
```

**Example:**

Station power should be in `kW`, thus the smaller number.

```json
{
  "power" : 50,
  "level" : 3
}
```

## Station

A station composes an arbitrary amount of the aformentioned `Charger` types, and also includes the name of the station, the location, and the cost to build out that station given the chargers it has. Cost is measured in thousands of dollars, and the power of the stations are measured in `kW`.

**Schema:**

```json
{
  "type" : "object",
  "properties" : {
    "name" : {
      "type" : "string",
      "minLength" : 1,
      "maxLength" : 300
    },
    "lon" : {
      "type" : "number",
      "min" : -180,
      "max" : 180
    },
    "lat" :  {
      "type" : "number",
      "minimum" : -90,
      "maximum" : 90
    },
    "cost" : {
      "type" : "number",
      "minimum" : 0,
      "maximum" : 1000000
    },
    "chargers" : {
      "type" : "array",
      "items" : {
        "type" : "object",
        "properties" : {
          "power" : {
            "type" : "number",
            "minimum" : 0,
            "maximum" : 1000
          },
          "level" : {
            "type" : "number",
            "multipleOf" : 1,
            "minimum" : 1,
            "maximum" : 4
          }
        },
        "required" : [ "power", "level" ],
        "additionalProperties" : false
      }
    }
  },
  "required" : [ "name", "lon", "lat", "cost", "chargers" ],
  "additionalProperties" : false
}
```

**Example:**

Cost is in thousands of dollars, power of chargers is in `kW`. 

```json
{
  "name" : "Logan",
  "lon" : -111,
  "lat" : 45,
  "cost" : 34,
  "chargers" : [
    {
      "power" : 50,
      "level" : 3
    }
  ]
}
```

## Station List

A station list is the lookup table used for a chargin model. Refer to the next `Solution` type that will have zero-based indices that reference this. This schema is simply an array of the `Station` type defined above.

**Schema:**

```json
{
  "type" : "array",
  "items" : {
    "type" : "object",
    "properties" : {
      "name" : {
        "type" : "string",
        "minLength" : 1,
        "maxLength" : 300
      },
      "lat" :  {
        "type" : "number",
        "minimum" : -90,
        "maximum" : 90
      },
      "lon" : {
        "type" : "number",
        "min" : -180,
        "max" : 180
      },
      "cost" : {
        "type" : "number",
        "minimum" : 0,
        "maximum" : 1000000
      },
      "chargers" : {
        "type" : "array",
        "items" : {
          "type" : "object",
          "properties" : {
            "power" : {
              "type" : "number",
              "minimum" : 0,
              "maximum" : 1000
            },
            "level" : {
              "type" : "number",
              "multipleOf" : 1,
              "minimum" : 1,
              "maximum" : 4
            }
          },
          "required" : [ "power", "level" ],
          "additionalProperties" : false
        }
      }
    },
    "required" : [ "name", "lon", "lat", "cost", "chargers" ],
    "additionalProperties" : false
  }
}
```

**Example:**

A solution that uses this lookup table would indicate the _Logan_ station with index `0`, and the _Brigham City_ station with index `1`. To see the `Solution` type, see the next type definition.

```json
[
  {
    "name" : "Logan",
    "lon" : -111,
    "lat" : 45,
    "cost" : 34,
    "chargers" : [
      {
        "power" : 50,
        "level" : 3
      }
    ]
  },{
    "name" : "Brigham City",
    "lon" : -111,
    "lat" : 46,
    "cost" : 12,
    "chargers" : [
      {
        "power" : 30,
        "level" : 2
      }
    ]
  }
]
```

## Solution

A solution represents a selection of target stations for a proposed model. Indexes in the `solution.stations` property come in the form of integer indices that refer to a lookup array/table of station objects. These indices must be zero-based.

**Schema:**

```json
{
  "type" : "object",
  "properties" : {
    "stations" : {
      "type" : "array",
      "items" : {
        "type" : "number",
        "minimum" : 0,
        "maximum" : 500,
        "multipleOf" : 1
      }
    }
  },
  "required" : [ "stations" ],
  "additionalProperties" : false
}
```

**Example:**

```json
{
  "stations" : [ 0, 4, 6, 9, 10, 24 ]
}
```

## Corridor

A corridor represents some selected section of navigable road. Stored within this object are the coordinates along the road (sampled at potentially irregular intervals), as well as two additional arrays that specify information about the gaps between those coordinates. Given that the array of coordinates is `n` items long, the `corridor.aadt`, `corridor.energyPerMile.positive`, `corridor.energyPerMile.negative` will all be of length `n-1`. This fact is not validated in the schema, so whatever program that produces this object must check that this condition is met.

The `n`th value in `corridor.aadt` will have the average annual daily traffic between coordinates `n` and `n+1`. Likewise, the `n`th value of `corridor.energyPerMile.positive` and `corridor.energyPerMile.negative` will have the energy required for an electric vehicle to travel between the `n`th and `n+1`th coordinates travelling forward or backwards in mile markers (respectively).

**Schema:**

```json
{
  "type" : "object",
  "properties" : {
    "name" : {
      "type" : "string",
      "minLength" : 1,
      "maxLength" : 300
    },
    "coords" : {
      "type" : "array",
      "items" : {
        "type" : "array",
        "items" : [
          {
            "type" : "number",
            "minimum" : -180,
            "maximum" : 180
          },{
            "type" : "number",
            "minimum" : -90,
            "maximum" : 90
          }
        ]
      }
    },
    "aadt" : {
      "type" : "array",
      "items" : {
        "type" : "number",
        "minimum" : 0,
        "maximum" : 1000000
      }
    },
    "energyPerMile" : {
      "type" : "object",
      "properties" : {
        "positive" : {
          "type" : "array",
          "items" : {
            "type" : "number",
            "minimum" : 0,
            "maximum" : 1000000
          }
        },
        "negative" : {
          "type" : "array",
          "items" : {
            "type" : "number",
            "minimum" : 0,
            "maximum" : 1000000
          }
        }
      },
      "required" : [ "positive", "negative" ],
      "additionalProperties" : false
    }
  },
  "required" : [ "coords", "aadt", "energyPerMile" ],
  "additionalProperties" : false
}
```

**Example:**

These coordinates are completely bogus, but you can get the general idea from this very small corridor object.

```json
{
  "name" : "I5",
  "coords" : [
    [ -111, 45 ],
    [ -111, 46 ],
    [ -110, 46 ]
  ],
  "aadt" : [ 45, 52 ],
  "energyPerMile" : {
    "positive" : [ 2, 3 ],
    "negative" : [ 2, 1 ]
  }
}
```

# Addendum

If you have any problems with these schemas, or have noticed a mistake, send a message to me on GitHub or at my personal email if you know it.
