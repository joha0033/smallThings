# smallThings

TDD - Node.js + Express + Postgres + Knex
Backend to serve blog posts/tutorials.
Tables many-to-many: post // tag // post_tag
No production yet

## Starting it up

Local DB only.

Clone repo.
install dependencies: ```npm install```
create db: ```createdb smallThings```
create migrations: ```knex migrate:latest```
seed db: ```knex run:seeds```
dev: ```npm run dev ```
test: ```npm test ```
npm dev and test can be ran at the same time in different terminals.
