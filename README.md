# CatappCrossPlatform

To run this project you require Angular, Node.js and npm. To install Node.js and npm, please check https://nodejs.org/en/download/. To install  Angluar run:
```
npm install -g @angular/cli
```

Application depends on several 3rd party services. In case their API change some data may not load. Unless "cat-list works!" in not visible, the application works ;)

## Running as web app

To run this project as a web application (locally), run:
```
ng serve --open
```

## Running as desktop app

[Elecron](https://electronjs.org/) is used to compile and package desktop version of this project. To build this project as desktop application, electron and electron-packager are required. To install them run:
```
npm install -g electron
npm install -g electron-packager
```
To compile and run application run:
```
npm run electron-build
```
To create application package for Linux run:
```
npm run electron-package-linux
```


