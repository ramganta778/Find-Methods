let mongoose = require("mongoose");
let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());

app.get("/employees", async (req, res) => {
  let employees = await Employee.find();
  res.json(employees);
});

app.get("/employee", async (req, res) => {
    let employees = await Employee.find().limit(10).skip(10);
    res.json(employees);
  });


  app.get("/employe", async (req, res) => {
    let employees = await Employee.find().and([{gender:"Male"},{country:"Poland"}]);
    res.json(employees);
  });

  app.get("/employ", async (req, res) => {
    let employees = await Employee.find().or([{gender:"Female"},{country:"United States"}]);
    res.json(employees);
  });
  app.get("/emplo", async (req, res) => {
    let employees = await Employee.find().sort("salary");
    res.json(employees);
  });

  app.get("/empl", async (req, res) => {
    let employees = await Employee.find().select(["firstName","profilePic","salary"]);
    res.json(employees);
  });

app.listen(9441, () => {
  console.log("Port Number Is Ready");
});

let employeeSchema = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  gender: String,
  country: String,
  profilePic: String,
  salary: Number,
});

let Employee = new mongoose.model("employee", employeeSchema);

let connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ramganta778:balaji@cluster0.vhgpcgw.mongodb.net/amazon?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Successfully Connected To The DB");
  } catch (err) {
    console.log("Unable To DB");
  }
};
connectToDB();
