09/25/2023
Spent a good amount of time trying to set up MongoDB server and containerize it. Made a model, router, and query file for accounts which will later be used to keep track of users and their profile settings.

09/27/2023
Got FastAPIs running for account objects. Struggled with validation errors but managed to fix them. Started working on implementing authentication but am experiencing trouble with refactoring code to resemble more of what Curtis showed us. I think I'll be able to get it working tomorrow though.

10/09/2023
After a lot of frustration and help from Whitley, I managed to fix an internal server error I was getting when trying to make an account and generate an authentication token.

10/11/2023
Managed to get backend authentication pushed to main branch and begin working on frontend authentication. Made a mistake that appeared to overwrite changes pushed to Gitlab, but we managed to reverse the mistake using "git revert." Made LoginForm and started on SignUp form.

10/17/2023 and 10/18/2023
Worked with Emre to make navigation bar and add conditional rendering to change appearance of navbar based on login status of user. Then configured LoginForm and SignUpForm to redirect to the homepage upon logging in or signing up. Pulled tailwind and other styling files into my branch. Going to converse with teammates to figure out what I should work on next.

10/19/2023
Worked on calendar but we ultimately decided that it would be better left as a stretch goal. Added some styling to the log in and signup forms. Currently experiencing problems with the navbar not rerendering automatically upon logging in. Will try some more tomorrow.
