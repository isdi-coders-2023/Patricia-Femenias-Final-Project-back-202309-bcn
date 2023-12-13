<div align="center">
  <img src="https://i.postimg.cc/c4kyBQc6/logo-11zon.webp" align="center" height="300" width="" />
</div>

Welcome to the My 90s Furby Collection API documentation! This API serves as the backend for the My 90s Furby Collection project, allowing users to manage their Furby collection from the 90s. The API provides endpoints for retrieving Furby data from a MongoDB database.

# <div align="center"> ♥Endpoints♥

## ♥ GET /

- Check the server's response through the pingController.
- Dispatch the message "🏓 Pong" and status code 200.

## ♥ GET / (Not found endpoint)

- Request to an invalid endpoint.
- Dispatch the error message "Endpoint not found" in the sesponse body and 404 status code.

## ♥ GET / furbys

- Request a list of 10 Furbys.
- Respond a collection of 10 Furbys in the response body and status 200

## ♥ GET / furbys /:id

- Request a Furby by its id.
- Respond the requested Furby in the response body and status code 200.

## ♥ DELETE / furbys / delete / :id

- Request to delete a Furby by its id.
- Respond with an empty body and status code 201.

## ♥ POST / furbys / create

- Request to create a new Furby.
- Respond the new Furby in the response body and status code 201.

## ♥ PATCH / furbys / :id

- Request to modify a Furby by its id.
- Respond with the modified Furby in the body and status code 200.

<br/>

# <div align="center"> ♥Stack♥

</div>

<div align="center">  
<a href="https://www.typescriptlang.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="40" /></a>
<a href="https://expressjs.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="40" /></a>
<a href="https://www.mongodb.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="40" /></a>
<a href="https://mongoosejs.com/" target="_blank"><img style="margin: 10px" src="https://miro.medium.com/v2/resize:fit:370/1*jO715XDC1YAEsWUwovWUQw.png" alt="mongoosejs" height="40" /></a>
<a href="https://www.jestjs.io/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/jest.svg" alt="Jest" height="40" /></a>
<a href="https://nodejs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="40" /></a>

# <div align="center"> ♥ SonarCloud ♥

<div align="center">

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Patricia-Femenias-Final-Project-back-202309-bcn&metric=coverage)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Patricia-Femenias-Final-Project-back-202309-bcn)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Patricia-Femenias-Final-Project-back-202309-bcn&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Patricia-Femenias-Final-Project-back-202309-bcn)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Patricia-Femenias-Final-Project-back-202309-bcn&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Patricia-Femenias-Final-Project-back-202309-bcn)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Patricia-Femenias-Final-Project-back-202309-bcn&metric=bugs)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Patricia-Femenias-Final-Project-back-202309-bcn)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Patricia-Femenias-Final-Project-back-202309-bcn&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Patricia-Femenias-Final-Project-back-202309-bcn)

</div>
