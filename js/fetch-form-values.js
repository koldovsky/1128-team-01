import {readFileSync, writeFileSync} from 'fs';
import { json } from 'stream/consumers';

function collectData() {
  const name = document.getElementById("name").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const dataObject = {
    name: name,
    "phone-number": phoneNumber,
  };

  const jsonFile = readFileSync("../json/people-to-call.json");
  const jsonData = JSON.parse(jsonFile);

  jsonData.push(dataObject)

  const jsonString = JSON.stringify(jsonData);

  writeFileSync("../json/people-to-call.json", jsonString, "utf-8", (err) => {
    if(err) throw err;
  });

  document.querySelector(".question-tab__form-block").reset();
}