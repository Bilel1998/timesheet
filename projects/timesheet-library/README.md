# TimesheetLibrary

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Author

Gopartner

## How to use the library

1. When the library deployed in private directory . You must create an .npmrc file in the source project folder whith the credentials to acces to
2. npm install @gopartner/timesheetlibrary
3. Add in imports module.ts TimesheetLibraryModule
4. Add in component.html<timesheetLibrary[titleSideColumn]=""[inputList]=""[sideColumns]=""[Object]=""(listUpdated)=""> <\/timesheetLibrary>
1. In component.ts you put the data to be processed :
   titleSideColumn : string
   inputList : string[][]
   sideColumns : string[]
   Object : object [ {key : number , value : string} ]
   listUpdated -> return the updated inputLis

## Code scaffolding

Run `ng generate component component-name --project timesheetLibrary` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project timesheetLibrary`.

> Note: Don't forget to add `--project timesheetLibrary` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build timesheetLibrary` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build timesheetLibrary`, go to the dist folder `cd dist/timesheet-library` and run `npm publish`.

## Running unit tests

Run `ng test timesheetLibrary` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
