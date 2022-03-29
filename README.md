# pocprimevue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run in powershell to create a container
```
docker build -t pocprimevue .
docker run -it -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 5000:5000 pocprimevue
```
### Run the build for the customer
#### On the first time 
```
Run the file called "Install.bat"
```

#### The rest of the time
```
Run the file called "StartUp.bat"
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
