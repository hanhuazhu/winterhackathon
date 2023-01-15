# Frontend and Database Endpoints/APIs

</br>

## Server-side Documentation:

</br>

## Getting/Creating User Data
https://healthtracerapi.onrender.com/api/v1/user/

</br>

#### POST https://healthtracerapi.onrender.com/api/v1/user/

Creates new row in user table. Usernames must be unique. No repeats. 
Requires POST JSON body:

```
{
"firstName":"",
"lastName":"",
"username":"",
"password":""
}
```

</br>

#### GET https://healthtracerapi.onrender.com/api/v1/user/ _username-here_

Requires a GET query parameter of _username_

Returns JSON of format:

```
{
"firstName":"",
"lastName":"",
"uuid":"",
"username":"",
"password":"",
"createdAt":"",
"updatedAt":""
}
```

</br>

## Getting/Creating User Session:				
https://healthtracerapi.onrender.com/api/v1/auth/

</br>

#### POST https://healthtracerapi.onrender.com/api/v1/auth/register


Functionally equivalent to user creation with user endpoint, but generates an authToken
*POST https://healthtracerapi.onrender.com/api/v1/auth/login


Functionally equivalent to user login with user endpoint, but generates an authToken

Requires POST JSON body:
```
{
"firstName":"",
"lastName":"",
"username":"",
"password":""
}
```

</br>

#### GET https://healthtracerapi.onrender.com/api/v1/auth/<username-here>:


Functionally equivalent to user GET but:

Requires an authentication header containing authToken

Returns JSON of format:
```
{
"firstName":"",
"lastName":"",
"uuid":"",
"username":"",
"password":"",
"createdAt":"",
"updatedAt":""
}
```

</br>

#### POST https://healthtracerapi.onrender.com/api/v1/auth/logout

authTokens stored in a separate table means multiple devices can connect to the same account, because they store separate authTokens locally. However, these must be deleted when logging out.

</br>

## Getting/Creating/Updating User Biometrics
https://healthtracerapi.onrender.com/api/v1/biometrics/

</br>

#### POST https://healthtracerapi.onrender.com/api/v1/biometrics/


Requires a username ONLY in the JSON POST body. Creates a new row with NULL columns for each field. Example:

Input:
```
{
"username":""
}
```


Returns JSON:

    {
    "status": "OK",
    "data": {
        "updatedAt": "2023-01-15T05:37:29.682Z",
        "createdAt": "2023-01-15T05:37:29.682Z",
        "height": null,
        "weight": null,
        "age": null,
        "bmi": null,
        "blood_pressure": null,
        "pulse": null,
        "fbg": null,
        "exercise_history": null,
        "smoking": null,
        "current_exercise": null,
        "cholesterol_levels": null,
        "triglycerides": null
        }
    }



</br>

#### PATCH https://healthtracerapi.onrender.com/api/v1/biometrics/ _username-here_


This is where you enter the user biometrics. Requires a username query parameter in URL AND a JSON POST body of format:

```
{
    "height":"integer",
    "weight":"integer",
    "age":"integer",
    "bmi":"float",
    "blood_pressure":"integer",
    "pulse":"integer",
    "fbg":"integer",
    "exercise_history":"string",
    "smoking":"boolean",
    "current_exercise":"string",
    "cholesterol_levels":"integer",
    "triglycerides":"integer"
}
```

Returns:

```
{
 "status": "OK",
 "data": {
       <int>
 ]
}
```

</br>

#### GET https://healthtracerapi.onrender.com/api/v1/biometrics/<username-here>


Simple GET request that returns the biometric profile associated with <username-here>.
Requires username query parameter.
Returns something like:
```
{
    "status": "OK",
    "data": {
        "height": 69,
        "weight": 151,
        "age": 24,
        "bmi": 1.8,
        "blood_pressure": "80/120",
        "pulse": 76,
        "fbg": 25,
        "exercise_history": "athletic",
        "smoking": false,
        "current_exercise": "active",
        "cholesterol_levels": 27,
        "triglycerides": 24,
        "createdAt": "2023-01-15T05:37:29.682Z",
        "updatedAt": "2023-01-15T05:42:08.177Z"
    }
```

</br>



#### We have an updated login validation endpoint in one of our branches not yet pushed to main:

#### POST https://healthtracerapi.onrender.com/api/v1/user/login


This is a POST request and NOT a get. Requires JSON body with format:
{
"username":""
"password:""
}


The username and password are what a registered user will input on the login screen.
If the username and password match those stored in the database, it will return the user profile in JSON:
```
{
"firstName":"",
"lastName":"",
"uuid":"",
"username":"",
"password":"",
"createdAt":"",
"updatedAt":""
}
```
It basically does what the normal GET user request does except it avoids exposing the password in a GET query param. Instead, you pass the username and password from login into the POST body as a JSON for the server to authenticate and then return the user profile. If either the password or username are wrong or they don't exist, you will get a JSON string response "Invalid username or password!"


</br>


## Public APIs used in the frontend:

</br>

## Getting/Populating Adverse Drug Events:

Retrieving top 5 adverse drug events for listed drug:
```
https://api.fda.gov/drug/event.json?search=patient.drug.openfda"DRUG"&count=patient.reaction.reactionmeddrapt.exact&limit=5
```
For search queries, replace DRUG with the drug name to retrieve medication data in JSON format.  The RESULTS section contains the matching adverse event returned by the API.  Under Results, each adverse event report consists of multiple sections, the ones used are the following:
TERM: “name of adverse drug event”
COUNT: “amount of events reported within a specific timeline”
 
Getting/Populating Drug Information:
https://api.fda.gov/drug/label.json?search=DRUG&limit=1
For search queries, replace DRUG with the drug name to retrieve medication data in JSON format.  The RESULTS section contains the matching medication data returned by the API.  Under Results, each child section contains different drug information pertinent to the drug.  Not all medications contain the same result sections.  The ones used are the following:
````
DESCRIPTION
INDICATIONS_AND_USAGE
DRUG_INTERACTIONS
WARNINGS
````
