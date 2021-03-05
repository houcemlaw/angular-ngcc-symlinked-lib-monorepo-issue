# Import json file from a Symlinked angular library issue

## Issue Descritpion
A root project json file not found in path when a symlinked lib is used 


## Step to reproduce the issue

### Build the library
`git clone https://github.com/houcemlaw/angular-ngcc-symlinked-lib-monorepo-issue.git`

`cd angular-import-not-resolved-repro`

`npm install`

`ng build myLib --prod`

### Serve the enclosed demo application
`ng serve`

### Navigate to (localhost:4200)

You should see the library version `0.0.1` in the home page


### Create a link to the created library
`cd dist/my-lib & npm link`

### Use the library in a new angular project

#### Create a new angular project

`ng new my-app --style=scss --routing`

#### Link the library to the newly created application
`cd my-app & npm link my-lib`

#### Use the lib component in the newly created app my-app

#### - import the library module in the main application module `AppModule`

`import { MyModuleModule } from '../../../my-lib/src/public-api';`


`imports: [
    BrowserModule,
    AppRoutingModule,
    MyModuleModule
  ]`


#### - Include the lib component in app.component.html
`<lib-my-component></lib-my-component>`

#### Serve The application
`ng serve`


