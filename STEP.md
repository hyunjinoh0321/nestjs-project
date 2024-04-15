## 설계 
Make API
의존성 주입
MongoDB 연결 .. (다양한 DB 연결 시도)

## 화면 구성
React 고려

## install 
npm i -g @nestjs/cli
npm install @nestjs/mongoose mongoose

## install : 이메일 검증 사용
npm i uuid
npm i --save-dev @type/uuid

## install : send email
npm i nodemailer
npm i --save-dev @types/nodemailer

## Manage config 
npm i @nestjs/config
npm i joi

.development.env
.stage.env
.production.env

## Use MySQL
npm i tyeporm
npm i nestjs@typeorm
npm i mysql2

## use checking validation
npm install --save class-validator
npm install --save class-transformer

## USE NESTJS 

```bash
# Make Project
$ npx @nestjs/cli new nestjs-project
$
$
$

```

## Make source code
```bash
# Make Project
$ npx @nestjs/cli g controller [name] --no-spec
$ npx @nestjs/cli g service [name] --no-spec
$ npx @nestjs/cli g repository [name] 
$

```

## GIT

```bash
# GIT 
$ git init 
$ git add [file]
$ git commit -m "first commit"
$ git branch -M main

# add remote repository
$ git remote add origin https://github.com/hyunjinoh0321/nestjs-project.git
$ git push -u origin main 
```

## Start MongoDB
mongod --dbpath e:\Mongo\data