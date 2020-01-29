function get() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("THIS IS A SECRET MESSAGE")
    }, 2000)
  })
}

export default {
  get
}
