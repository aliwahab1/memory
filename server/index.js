import express from "express";
import bodyParser from "body-parser";
import mongoose, { set } from "mongoose";
import cors from 'cors';

// const express = require('express');

const app = express();

app.use(bodyParser.json({limt: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limt: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://wahadb:ayichatou@traversiecluster.z0g2cja.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server run on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);