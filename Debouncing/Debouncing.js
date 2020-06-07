const getData = () => {
  console.log('fetching data ....')
}

const debounce = () => {
  let timer
  return function () {
    let context = this
    let args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => { getData.apply(context, args) }, 800)
  }
}

const betterFunction = debounce()
