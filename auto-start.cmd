@echo off

start cmd /k "cd ./nest-test && yarn start:dev"
start cmd /k "cd ./react-test && npm run start"

exit
