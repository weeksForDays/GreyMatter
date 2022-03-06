# GreyMatter
using this for a COS420 project
Group Members:
Johnny Driscoll
Allison Lupien
Christian Silva
Elliot Weeks
Orion Schwab

Christian Silva - Created a basic routing system that can take users between sign up, log in, and home component pages.
This goes through a "secure" route that only allows someone to get to the home page if they have been authenticated by checking if there is a non-nul user
in the context. I believe someone can circumvent this by adding a user through the console, but I don't know what to do about this and they have to be authenticated
to get any data from the server so I am tempted to say it doesn't matter. In addition I also set up authentication through firebase that supports both google and
email/pass to create an account. Also added a button on the home page that logs the user out.