# Bitcoin

This is a [Next.js](https://nextjs.org/) project with Mongodb database and use "highcharts" for graphic

## Getting Started

you need add .env file where write 
MONGO_URL= 
in your MONGO_URL Access your Atlas data using mongodb`s native drivers(e.g.Node.js,Go,etc.)

### Local
First, run the development server:
```
npm install
npm run dev
```


### Docker
<p>if you want to use docker you still need .env</p>

```
docker build -t your-image-name .
docker run -p 3000:3000 -d your-image-name
and open http://localhost:3000/
```

![Bitcoin](https://github.com/Vardanyan-Hovo/Bitcoin/blob/main/public/bitcoin.png)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
