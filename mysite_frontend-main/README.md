#### fetch
```jsx

fetch('test').then((res) => {
  res.json().then((data) => {
    console.log(data)
  }).catch((e) => {
    console.log(e)
  })
}).catch((e) => {
  console.log(e)
})
// or

try {
  const res = await fetch('test')

  try {
    const data = await res.json()
    console.log(data)
  } catch (e) => {
    console.log(e)
  }
} catch (e) {
  console.log(e)
}

```

### axios(Promise)
```jsx

axios.get ('https://mysite-dev2020.herokuapp.com/products/',)
  .then((res)=>{
    setData(res.data)
  }).catch((e)=>{

  })
//or
try {
  let response = await axios.get('https://mysite-dev2020.herokuapp.com/products/',)
  setData(response.data);
} catch(e) {
  console.log(e, e.response.data)
}
```
