────────────────────────────────────────────────────────────────────────────────
                                  PLAY AWS MVP
────────────────────────────────────────────────────────────────────────────────
USER STORY
──────────
user runs the command: 
play-aws 
play-aws uses a configuration file in the homedirectory called
play-aws.json 
  - loginType: IAM USER | ROOT USER
    • accountIdOrAlias used for IAM sign in
      - username
      - password
    • rootUserSignIn 
      - email 
      - password

The chromium browser opens up and logins into the aws account.

The user is presented with a command prompt

Enter help 

play-aws> rds

typing the command rds will make the chromium browser navigate to the rds GUI at the aws console.

play-aws> rds help

typing the command rds help will spawn a new browser window  that opens up to the rds documentation.

play-aws> rds drills 

typing the command rds drills will print a list of available rds drills that can be ran by typing the command rds drill <drill name>

play-aws> rds drill <drill name>

typing the command rds drill <drill name> will print out a small description of the drill, and then list the sequence of actions that the user needs to perform in the browser window to complete those tasks.

play-aws> help

typing the command help will print out a list of available commands and a help.txt file that explains how to use the tool.





