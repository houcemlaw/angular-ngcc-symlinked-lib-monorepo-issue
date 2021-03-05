# Import json file from a Symlinked angular library issue

## Issue Descritpion
A root project json file not found in path when a symlinked lib is used 


## Step to reproduce the issue

### Build the library
`git clone https://github.com/houcemlaw/angular-ngcc-symlinked-lib-monorepo-issue.git`

`cd angular-import-not-resolved-repro`
`npm install`
`ng build myLib --prod`

### Create a llink to the created library
`cd dist/my-lib & npm link`

### Use the library in a new angular project

#### Create a new angular project

`ng new my-app --style=scss --routing`

#### Link the library to the newly created application
`npm link myLib`

#### Serve The application
`ng serve`


