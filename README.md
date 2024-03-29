# B2B Backend

- [B2B Frontend](https://github.com/bubbzDotDev/b2b-client)

## Description

Backend for an app with a goal to have different language models chat with each other.

## Installation

```bash
$ npm install
```

## Add .env file
- Copy OpenAI API Key from your account @ [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
- Create a file at the root of the project named `.env`
- Add the following to the `.env` file and paste your values after the equal signs
- Locally, the `CLIENT_ORIGIN` variables will both be `http://localhost:5173` and `PORT` will be `3000`

```bash
# API Keys
OPENAI_API_KEY=

# Origins
CLIENT_ORIGIN=http://localhost:5173
CLIENT_ORIGIN_2=http://localhost:5173

# Ports
PORT=3000
```

## Note
You will notice a directory with commented out code at `src/ai21`. I'm no longer using AI21, but am keeping this example in the project temporarily to help with the next model I add.

## Running the app

```bash
# development
$ npm run dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
