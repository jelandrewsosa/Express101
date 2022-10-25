import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

const users = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {

  if (users.length === 0) {
    return res.status(400).json({
      error: "Users is Empty",
    });
  } else {
    res.status(200).json(users);
  }
});

app.post("/users", (req, res) => {
  const details = req.body;
  const filteredDetails = Object.fromEntries(
    Object.entries(details).filter(
      ([key]) =>
        key.includes("firstName") ||
        key.includes("lastName") ||
        key.includes("email")
    )
  );
  console.log(
    Object.fromEntries(
      Object.entries(details).filter(
        ([key]) =>
          key.includes("firstName") ||
          key.includes("lastName") ||
          key.includes("email")
      )
    )
  );
  users.push(filteredDetails);
  return res.status(201).json(filteredDetails);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
