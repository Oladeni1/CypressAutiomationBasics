## run tests using built-in Electron browser
docker-compose run e2e-electron

## run tests using Chrome browser pre-installed in cypress/included image
docker-compose run e2e-chrome

## run tests using Firefox browser (also pre-installed)
docker-compose run e2e-firefox
