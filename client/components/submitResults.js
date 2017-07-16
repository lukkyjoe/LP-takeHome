// const save = require('../saveToDB/save');

export default function submitResults(values) {
  console.dir(values);

  return new Promise((resolve, reject) => {
      fetch("/api/", {method: "post", body: JSON.stringify(values)})
        .then(res => res.json())
        .then(res => {
          if (res.hasOwnProperty("errors")) {
            reject(res.errors)
          } else {
            resolve(res.data)
          }
        })
    })

}