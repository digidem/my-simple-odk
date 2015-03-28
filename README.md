# Simple ODK Server

This is a simple roll-your-own server for receiving form submissions from ODK Collect and storing them in a Github repo, a Github Gist, or a Firebase database (Firebase is still experimental and reading a blank forms does not work).

**This is currently experimental, needs more docs, and will possibly break**

## Installation

1. Requires [node](https://nodejs.org/) and [git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. Clone this repo `git clone https://github.com/digidem/simple-odk-custom.git`

3. `npm install`

4. You must set the environment variable `FORM_STORE` to one of:
    - `github` - you also need to set `GITHUB_USER` and `GITHUB_REPO`
    - `gist` - also set `GIST_ID` to the id of the gist you want to submit to
    - `firebase` - also set `FIREBASE_APP` to the firebase app name
    
    e.g.

    ```bash
    export FORM_STORE=github
    export GITHUB_USER=myrepoowner
    export GITHUB_REPO=mygithubreponame
    ```
    
5. `npm start`

That should be it, check by visiting http://localhost:8080/ and you should see `OK`

## Deploy on Heroku

Just click the button below and fill in the required environment variables (see above)

 [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
