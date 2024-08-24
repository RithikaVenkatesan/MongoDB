require("dotenv").config();
const studReg = require("./studRegister/studentRegister/reg.js");
const express = require("express");
const Reg =new express();
const port=process.env.PORT || 8080;
Reg.use("/registers",studReg);
Reg.listen(port,()=>{
    console.log(`express app listening at https://localhost:${port}`);
});