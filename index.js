const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = 3000;

const handler = (req, res) => {
  res.send("hello from node js");
};

app.get("/", handler);

const users = [
  { id: 0,name: "fazle rabbi", email: "fazlerabbi@gmail.com",phone: "1464135115"},
  { id: 1, name: "sting", email: "sting@gmail.com", phone: "1464135115" },
  { id: 2, name: "sakib", email: "sakib@gmail.com", phone: "1464135115" },
  { id: 3, name: "shelby", email: "shelby@gmail.com", phone: "1464135115" },
  { id: 4, name: "jayed", email: "jayed@gmail.com", phone: "1464135115" },
  { id: 5, name: "foysal", email: "foysal@gmail.com", phone: "1464135115" },
  { id: 6, name: "fahad", email: "fahad@gmail.com", phone: "1464135115" },
  { id: 7, name: "professor", email: "pofessor@gmail.com", phone: "1464135115" }
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if(search){
    const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult);
  }
  else {
    res.send(users);
  }
});
// app.Method
app.post('/users', (req, res)=>{
  const newUser=req.body;
  newUser.id=users.length;
  users.push(newUser)
  console.log('hitting the post', req.body);
  res.json(newUser);
})
//daynamic aoi
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to port", port);
});
