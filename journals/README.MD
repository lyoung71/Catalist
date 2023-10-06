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

9/29 4:37 am -
The batman has not been spotted since the city flooded, he is nearby waiting to strike like snakes.
pydantic.error_wrappers.ValidationError: <unprintable ValidationError object> I keep getting this error that I cannot figure out, my get request is completely not working and its giving me a 500 internal error, as if my get_journals function isn't working at all it will not get all the journals in the database. The create_journal is working and saving to the mongodb database and the get by id is getting a journal by its unique id.
Update\*\* 4:52 am - I changed the fast api and pydantic version again and now I do the get request and it is shows all the journals in the terminal but is giving a error 'msg': 'Input should be a valid dictionary or object to extract fields from', 'input':

10/1/23 -
I have resolved the error and I do not exactly know what I did, but I do remember that I deleted all the data in the mongodb express site and then tried the post requests again for the journals and then I did a get request and it stored all the info in the database and was showing all the journals in the GET endpoint. Not sure what I did, I think also deleted the collection and made it again. Even though models were good for the BaseModels, I changed the type to all str already but I guess FastAPI just did not catch up or was working too slow or maybe when I deleted the collection before had the date field for the journal_date in my journals.py models file, maybe it was still thinking the type was a date or int type attribute. Note\* Just make a new collection or database.
