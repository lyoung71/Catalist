## Journals

Please keep all of your individual journals in this directory.

Each team member is required to keep a development journal, which should be a single markdown file with an entry for each day the project was worked on.

Recommended naming convention is `first_last.md`.

9/25/23 -
We have successfully dockerized the project and have 4 running containers: FastAPI-1,Gh-1, Mongo-1, Mongo-express-1. I had to create a volume for mongodb-data and add mongo and mongo-express under the services tab so that i could run the database server in a container.

9/27/23 -
Im trying to make the APIs for journals but I am a bit stuck on what to do for the mongodb stuff and connecting it to my routers and now my docker is a little different because I changed my requirements.txt file to fastapi[all]. I am going to continue to play around with it and see if the version number or something is wrong.
**Resolved** The pydantic version was not compatible with the fastapi version that was used.
Then after that my fast api container was not working because of "Module not found MONGO_URL". I was expecting this to occur sooner or later because my yaml file did not have this configuration. I also had to get rid of the fast api service because I would then have two services running on the same port so I deleted that container and used the api one that is configured under the mongo-express service in my yaml file. End result: all the journals endpoints show up in fastapi server.
