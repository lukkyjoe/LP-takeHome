const submitResults = values => {

console.dir(values);
new Promise((resolve, reject) => {
      fetch("/api/", {
          method: "post", 
          body: JSON.stringify(values),
          headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'}
        }
      )
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

// const showResults = values =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       // simulate server latency
//       console.log('helloo');
//       window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
//       resolve()
//     }, 500)
//   })

export default submitResults;