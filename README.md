# Catalist

The Globetrotterz:
- Emre Akilli | [GitLab](https://gitlab.com/emreakilli)
- Landon Young | [GitLab](https://gitlab.com/lyoung71)
- Joyce Dionisio | [GitLab](https://gitlab.com/jojodionisio)
- Mark Pastoral | [GitLab](https://gitlab.com/mpastoral)
- Hamzah Rahman | [GitLab](https://gitlab.com/hrahman3)

Catalist - Documenting daily journals

Catalist - Tracking daily/weekly tasks

Catalist - Creative UI implenting APIs

1. `Functionality`:
Our app named 'Catalist' is a journaling app where the user can write about their day in an online journal and also record tasks in a to-do list. The journals and tasks are saved to the user's account so they can view it later. Catalist uses CRUD operations with FastAPI in the backend and React + CSS to generate the frontend.

2. `User Stories/Scenarios`:
Below are some user stories we came up with:
Feature: Given [I want to lower my stress levels], when [I journal], then [I am able to declutter my thoughts and make them less stressful]

User Story(1): As a [student], I want to [use a calendar that I can add to], so that [I could keep track of my deadlines, due dates, and important events]

User Story(2): As a [young adult], I want to [create a to-do list], so that [my tasks can be listed and rearranged easily for better time management]

User Story(3): As a [working professional], I want to [utilize the stored journal entries], so that I can [check/revisit old notes and resources]

User Story(4): As a [software engineer], I want to [store old notes/journal entries], so that I can [go over old documentation I’ve stored in notes]*


3. `Intended Market`: Clearly define your user persona and target demographic. :dart:
- E.g.: Aimed at cinephiles who appreciate algorithmic review recommendations.

Aimed at mental-health minded people who have a preference for a colorful, videogame themed aesthetic. This demographic includes but not is not limited to: Young people in the late teens to early 30s range.
4. `Stretch Goals`: Document “nice-to-haves” in your product roadmap. :rainbow:
- Night mode implementation
- More advanced CSS stylings such as drop-down menus or animations
- Having the date info in journals and todos as an actual date property instead of a string.

5. `Onboarding`: Detail the local dev setup, branching strategy, .env, 3rd party api keys, and CI/CD pipeline. :rocket:
Fork the repo, clone locally, install dependencies via `npm install`, and checkout to a feature branch. We used the API named PokeAPI. PokeAPI uses an API that returns information on magical fictional videogame animals called “Pokemon”. The API is free of use and allows only GET requests. This API did not require the use of a key. The dependencies we downloaded are Tailwind CSS and SASS. 
To grab the project:
Create a folder to place the project in using the terminal
Make sure to use the <cd> terminal prompt to change directories into the folder you’ve just created
Use the terminal command <pwd> to check your current working directory tp ensure you are in the right place then fork and clone the repository from https://gitlab.com/globetrodders/module3-project-gamma
Move into the correct directory using <cd>
Once here, go ahead and type in the terminal command <code  . > in order to open the project in VScode

To review the running project:
Start by opening docker and your terminal.
Run these commands in this order:
<docker volume create mongodb-data>
<docker compose build>
Lastly, run
<docker compose up>
All containers should be running now.
There should be four containers running. They are listed below:
api-1: This running container should allow you to interact with your backend/api. This is where all the models, queries, routers, and tests are located. You can view this container in the port localhost:8000/docs
ghi-1: This running container should show you your front end/ react application on localhost:3000 
mongo-1: This container should contain your entire database. This goes hand in hand with Mongo Express, which we use alternatively to manage the database.
mongo-express-1: This running container allows us to manage and store our data. Specifically, our accounts data, journal data, and tasks data. You can view this on the port localhost:8081
To run the test:
To run tests, enter the docker container, API, and use the command:
<python -m pytest>
6. `Tech Stack`: Specify technologies, libraries, and frameworks. :books:
React, FastAPI, MongoDB, Mongo Express, Docker, CSS, Tailwind CSS, SASS, REST Framework
7. `Journaling`: Maintain a dev log, perhaps in a `CHANGELOG.md`. :scroll:
Each members’ journals are located in the ‘journals’ folder.
8. `Documentation`: Attach DB schemas, wireframes, and API contracts. :clipboard:
https://excalidraw.com/#room=1293c6c05b040a9ba9fa,seaWksl1K3nK7u6ZJBtniw

9. `Issue Tracking`: Link to your Linear or JIRA board for bug tracking. :ladybug:
Jira was used early in the project and trello using agile boards, transitioning to mob coding and dealt with issues directly through git lab and using merge requests.



10. `Testing`: Describe unit tests. :white_check_mark:
File locations for unit tests are in /api/tests.
Emre:
Test: “test_get_by_username”
Tests if get_by_username queries successfully returns data of a mock account.
Landon:
Test: “test_get_journal_by_id”
Tests if get_journal_by_id successfully returns data of a mock journal object.
Mark:
Test: “test_get_all_journals”
Tests if get_journals successfully returns data of a mock list of journal objects.
Hamzah:
Test: “test_create_journal”
Tests if create_journal successfully makes a POST request to create a journal object.
Joyce:
Test: “test_update_journal”
Tests if update_journal successfully makes a PUT request to update a journal object.
















