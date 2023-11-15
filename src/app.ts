import express, { Application, Request, Response } from "express";

const app: Application = express();

const port: number = 3002;

app.get("/toto", (req: Request, res: Response) => {
  res.header("Access-Control-Allow-Origin", "*"); // Разрешить доступ с любых источников
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.send("Hello toto");
});

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
