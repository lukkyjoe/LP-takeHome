const Save = require('../saveToDB/save');

export default function submitResults(values) {
  console.dir(values);

  Save.saveToDB(values);

}