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

10/9/23 -
I really did nothing but watch coding videos

10/11/23-
I started the JournalList page and I am trying to make it look like my sales list page from project beta so that it can show the journals in the table by the date and mood.

10/13/23 -
Its Friday the 13th in October yet again, Camp Crystal Lake becomes one of the most places on Earth during this time.
I got the signup and login to show with the use of BrowserRouter instead of Outlet and the Router.js file that I deleted and the index.js is an important file as well when it comes to rendering your localhost 3000, apparently it already has <App/> in it so we don't have to put that in the routes for the App.js file. I kept getting an error says "Browser Router is used more than once and you must use it once only in your entire application" I was confused for a while because I did not see any extra <BrowserRouter> tags or bugs of that sort. So I commented out the {/_ <Route path="/" element={<App />} /> _/} and then magically appeared on the screen and the error went away. Now I cannot login on react page and console says "Failed to get Token". The console also keeps showing this SyntaxError: Unexpected token '<', "<!DOCTYPE ... is not valid JSON. It may or may not have to do with the fetch calls, its thinks its HTML??

10/16/23-
Its a cold October day and the leaves are falling faster... I could not get the token to be fetched and I still kept getting that error from the 13th and I spent the whole weekend trying to fix the bug but I somehow cannot understand why what I did made it work. I eventually changed the baseurl from localhost 3000 to localhost 8000, this is because the base url specifies the first part of the of the url that is used to send requests to the backend which is on localhost:8000. But Even then I got a terrible pydantic ValidationError and localhost:8000/token was not fetching any tokens then for some reason I was playing around with getting a token in the fastapi docs and I tried to login with an existing account I made that was saved in the database already and then I logged in and then executed get request for token and it successfully fetched the token. It worked soon for the frontend after I refreshed and it showed a logout button to click. I also had to add the Nav.js so that it would properly show up. My journal list still not showing very sad.
