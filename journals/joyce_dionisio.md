09/25/2023
Worked with group in order to dockerize/containerize project. We began with creating a volume named "mongodb-data" then by dockerizing, we were able to see the project on different ports. The four containers running are FastAPI-1,Ghi-1, Mongo-1, and Mongo-express-1. The terminal commands I utilized were: `docker volume create mongodb-data`; `docker compose build`; `docker compose up` --> can shorten this to `docker compose up --build`

09/27/2023
Today, I struggled with getting familiarized with the new things we've been implementing. We primarily discussed a plan of action. My primary focus was getting familiarized with FastAPI. To do so, I rewatched the lecture on Fast API and followed along. I also went ahead and re-read the exploration on FastAPI.

10/09/2023
Most of this was spent reconvening with the group and discsussing issues we ran into. At this point, I completed my FastAPI code for Todos and began trying to rewatch videos and do research on MongoDB. I still had difficulty understanding Mongo. I also allocated time in order to read about/ look at the exploration on SQL to ensure I was following and understanding. Later in the day I developed a bug that disabled the port to the database. I spent a few hours on this bug then gave up **_tears_**

10/11/2023
Today, we decided to MOB code in an attempt to work through front end auth with Landon. There were issues that arose when he and Mark git pushed into the Main branch. We were able to solve this using `git revert`. After this I played around a bit more with my CRUD to see if things were written correctly

10/13/2023
SpoOoOoKy! Friday the 13th! What's spookier is definitely the end of this module nearing us. We did a lot of talking as a group today and looked over some ideas for our front end. Emre showed us some photos/themes and we voted on a few. I'm still having backend issues- but as a group we've been asking for help from Whitley about the login/sign in/sign up.

10/16/23
Ok everything came crashing down. Today I was stuck because of a docker issue. Nothing would work. I attempted deleting and rebuilding containers and nothing fixed it. I eventually decided to delete all containers, volumes, and images and then pruned docker through my terminal. This resolved the issue.

10/17/23 -
Todo List is populating, however there's plenty of style issues. Dealt with some backend issues. I began coding frontend. My biggest issue has been attempting to install SASS correctly. I've tried multiple terminal commands but the only one that worked for me was ```npm install sass --save -dev```. Docker still showed issues, so I decided to delete my images and containers and then rebuilt and did docker compose up. 

10/19/23
Todo list and todo form progress has been working. I haven't been able to pull or push due to issues. I've accidentally gotten stuck in git hell. It seems as if rebasing is the issue. What helped for me was the command git reset. I ended up rebasing for hours, and had to abort the process through ```git rebase --abort```. Note: ```git merge --abort``` is also good to try.

10/23/23 -
Pokemon cards in dev page are now complete. I had to write a lot from scratch due to issues in the grid. Becuase the fire icons wouldn't align I had to go in and fix the grid on that specific div. Within six hours I was able to code out 5 pokemon cards and one gameboy. My stretch goal next week is to have buttons working inside the gameboy screen.

10/25/23 -
OMG had to delete my branch with Wanda. Super stressful but needed as my remote and local branch had diverged by like 140 commits somehow. It probably broke through the use of rebasing. I was able to finalize my todo list and todo form, and managed to route the background images correctly. I sent the other backgrounds to Mark and Hamzah to implement to their pages. Debugged and helped with Dante's code in another group

10/26/23-
We mob coded some issues, and I worked on creating buttons for my pages. I did a git merge request and we mob coded through it to determine the merge conflict solutions. As of right now all my pages are accurate, just want to try and fix some of the About page so that the grid is responsive. I am also currently working on the nav bar to ensure it is responsive too. 
