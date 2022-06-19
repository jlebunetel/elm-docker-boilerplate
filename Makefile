# Environment variables
# If the following required environment variables are not set,
# we try to get them from the .env file:

ifndef APP_NAME
	APP_NAME=$$(grep '^APP_NAME=' .env | cut -d= -f2-)
endif

# Commands

default: help

.PHONY: dev
dev: ## Runs containers in development mode.
	mkdir -p elm-stuff
	mkdir -p node_modules
	docker-compose \
		--file docker-compose.yml \
		--project-name ${APP_NAME} \
		up \
		--build \
		--remove-orphans \
		--renew-anon-volumes

.PHONY: clean-dev
clean-dev: ## Cleans development environment (Docker containers and volumes).
	docker rm ${APP_NAME}_frontend_1; exit 0
	docker volume rm ${APP_NAME}_elm-stuff; exit 0
	docker volume rm ${APP_NAME}_node_modules; exit 0
	rm -rf elm-stuff
	rm -rf node_modules

.PHONY: help
help: ## Lists all the available commands.
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(firstword $(MAKEFILE_LIST)) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
