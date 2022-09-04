# elm-docker-boilerplate
This is a simple Docker boilerplate for any Elm-based project.

You can visit our [demo site](https://jlebunetel.github.io/elm-docker-boilerplate/) to see how it looks.

## Features
- Provides a dev environment to build Elm applications.

## Installation

### Requirements
- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/).

Download this repository and unzip it on your computer. You should rename the folder `elm-docker-boilerplate-main` in `elm-docker-boilerplate`.

Or clone the repository directly on your computer:
```bash
$ git clone git@github.com:jlebunetel/elm-docker-boilerplate.git
```

### Install and run a development environment
This project stores config in environment variables.
When using _Docker Compose_ to run this project, the `.env` file is used to define all required environment variables.
You should never edit this `.env` file directly or store sensitive information in it, but you can override one or more of these variables by defining them directly in the shell before launching _Docker Compose_ (values in the shell take precedence over those specified in the `.env` file.).

Once you have customized your environment variables, you can build and start _Docker Compose_ with the following command:
```bash
$ make dev
```

This previous command builds all the required services for development and starts them all.

There may be a conflict if port `3000` on your machine is already in use. In this case, you can change it with the following command with a suitable port number:
``` bash
$ HOST_PORT=3333 make dev
```

Once the _Docker Compose_ project is built and is running, please open a new terminal and install inside the main _Docker_ container _Node_ dependencies:
```bash
$ docker exec -it my_app_frontend_1 npm install
```

Then, to start the development web server, please open a new terminal and run:
```bash
$ docker exec -it my_app_frontend_1 npm run watch
```

Wait a bit for the application to build, then you can access it with your favorite internet browser at the address `http://localhost:3000/`.

### Build your project in production mode
You can build this project inside the `docs` directory:
```bash
$ docker exec -it my_app_frontend_1 npm run build
```

And use a web server to serve it. Here is an example with _Python_:
```bash
$ cd docs/
$ python3 -m http.server --bind 0.0.0.0 8000
```

The environment variable `ASSET_PATH` is used to configure a subfolder to publish your project. Default is set to `ASSET_PATH=/elm-docker-boilerplate/` in order to publish this very project to `https://jlebunetel.github.io/elm-docker-boilerplate/`. If you want to publish it from a simple domain (without subfolder), please set it to `ASSET_PATH=/`.

ASSET_PATH=/elm-docker-boilerplate/

### Clean dev environment
To clean your development environment (_Docker_ containers and volumes), use the following command:
```bash
$ make clean-dev
```

## Tech/framework used
- [Node.js](https://nodejs.org/): a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [webpack](https://webpack.js.org/): a module bundler, to bundle JavaScript files.
- [Elm](https://elm-lang.org/): A delightful language for reliable web applications.
- [Bulma](https://bulma.io/): the modern CSS framework that just works.
- [Font Awesome](https://fontawesome.com/): the Internet's icon library and toolkit, used by millions of designers, developers, and content creators.

## Contributing
For the sake of simplicity, to ease interaction with the community, we use the [GitHub flow](https://guides.github.com/introduction/flow/index.html) for open-source projects. In a few words:
- The `main` branch is always stable and deployable;
- Tags from the `main` branch are considered as releases;
- Contributors have to fork or create a new feature-branch to work on (if they are allowed to in the original repository) and propose a pull request to merge their branch to `main`.

If you'd like to contribute, please raise an issue or fork the repository and use a feature branch. Pull requests are warmly welcome!

## Versioning
We use [SemVer](http://semver.org/) for versioning. See the [CHANGELOG.md](CHANGELOG.md) file for details.

## Licensing
The code in this project is licensed under MIT license. See the [LICENSE](LICENSE) file for details.

## Contributors
- **Julien Lebunetel** - [jlebunetel](https://github.com/jlebunetel).
