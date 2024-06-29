import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.get("/bye", (req: any, res: any) => {
  res.send("Bye World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
