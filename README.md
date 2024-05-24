## Run Locally

Install the [backend](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

Clone the project

```bash
  git clone https://github.com/pyko7/SportSee-front
```

Go to the project directory

```bash
  cd SportSee-front
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
```bash
VITE_API_URL=http://localhost:3000
VITE_USER_ID=12
VITE_NODE_ENV=production
```

## NOTE

You'll find these two **errors** in the console.

`YAxis: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.`

`XAxis: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.`

It has been mentionned in this [issue](https://github.com/recharts/recharts/issues/3615). An [alpha](https://github.com/recharts/recharts/issues/3615#issuecomment-2128464453) has been released to solve this problem. Considering this alpha may not be stable, I've decided to keep the 2.12.6 version for the moment.


