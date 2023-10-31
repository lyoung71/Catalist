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

10/17/23 -
I figured out how to get the journals list to show, and it was because I'm dumb and I put {journal.date} in the table I changed it {journal.journal_date} and the mood as well as the dates showed up. Although the striped rows don't show, the data does. Now it shows all of the journals when I do GET request for a journal. Now my challenge is that I have to make it so where the user can only view the journals thats logged in for that specific account which means the token has to com into play as well.

10/18/23 -
Huge progess and a lot of changing on the back end. My back end was not as sold as I thought. I asked myself, "How would I connect an journal to an account so they would have that foreign key type of relationship where each user can create their own journal and have it saved in the database associated with their account so ONLY they can see it". I seemed like an imposssible task at the time with our team using Mongodb. Since I did not have a certain id property on my models for accounts nor journals, I did not know where to start wether I have to start from stratch and make a new user model or something. Appparently with Mongodb, there is many different ways of creating that foreign key type relationship. I asked a question in slido and got many different answers so I turned to Whitley's help, and we were able to establish that relationship through the journal.queries file where my all my create read update delete code is. I had to just create a account_id variable to pass in the create_journal function and get_journals function. In the create function we passed in a argument called account_data that will have the account information and when you do a get journal depending on which user is logged in, their journals will show in fastapi backend when you login with the get /token endpoint it will show only that logged in user's journals. So what that tweak in the queries did was make an account_id property in the journals database that shows in mongodb express. The account_id property is literally the same as the \_id property from the accountsDatabase. Only thing that sucks is that all the journals I created will not show up due to the fact that now you have to be a logged in user with a token so then you can create read, update and delete. Today was pivotal progress. But now my front end won't show the journals (very sad).

10/19/23 -
The Batman has been spotted after 8 years, he is responsible for the death of Harvey Dent.
Today I fixed the front-end to show the journals, and I know that my table is correct and is showing the correct data but it will not display for some reason, I am pretty sure I am missing a conditional or some lines of code. I turned for help again and for a reason hitherto undreamt of, I had to create a fetchConfig variable and then put
const fetchConfig = {
credentials: "include",
};

I yet don't understand the meaning of this credentials: : "include", but I know for a fact it is doing something to get the authorization and authentication token and it basically handles everything for us. And for this very reason, we do not have to even use the import useToken from "@galvanize-inc/jwtdown-for-react"; hook const { token } = useToken();

We don't even need any of that at all! This is all still a mystery to me, like the Riddler sending riddles to Batman.

10/23/23 -
I am struggling on the journal detail page, because I have never created a detail page in react and I have none of my past projects to refer to due the projects never needed a detail page for each product or item like a hat detail or a shoe detail. How should it even look like, im guessing the journal form so that you can edit it.


10/25/23 -
The JournalDetail is finallyyyy complete and now I can edit and view a single journal and delete it. I had to tweak the submit handler because the edit feature was working and updating in the backend and the database reflected the changes I made on a journal,and it showed on the front end but for some reason there was a terrible PUT console error that was giving an internal server error. Now that the backend is offically robust with the help of my group members, Time for the CSS for JournalDetail and JournalList.