const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

// <<<---- Promise  ---->>>
// Promise.all(urls.map(url =>
//   fetch(url)
//   .then(response => response.json())
// )).then(results => {
//   console.log('1', results[0])
//   console.log('2', results[1])
//   console.log('3', results[2])
//   console.log('4', results[3])
// }).catch(err => console.log('ughhh fix it', err))

// <<<---- Async-Await ---->>>
const getData = async function () {
  try {
    const people = await Promise.all(
      urls.map(url => fetch(url).then(response => response.json()))
    )
    console.log('1', people[0])
    console.log('2', people[1])
    console.log('3', people[2])
    console.log('4', people[3])
  } catch {
    console.log('Ooops')
  }
}

const urls2 = [
  'http://jsonplaceholder.typicode.com/users',
  'http://jsonplaceholder.typicode.com/posts',
  'http://jsonplaceholder.typicode.com/albums'
]

// <<<---- Async-Await ---->>>
const getData2 = async function () {
  try {
    // Promise.all() takes the array of promises that resolves when all the individual promises resolved
    // The result is an array containing the resolved values from each promise (the parsed JSON data), in the order of the URLs
    const [usersA, posts, albums] = await Promise.all(
      // create an array of promises, where each promise fetches data from a URL and then parses the response as JSON
      urls2.map(url => fetch(url).then(response => response.json()))
    )
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  } catch {
    console.log('Ooops!')
  }
}

// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(console.log)

const getData = async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/')
  const data = response.json()
  console.log(data)
}

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(url => fetch(url).then(resp => resp.json()))
  )
  console.log('users', users)
  console.log('posta', posts)
  console.log('albums', albums)
}

// Updated version

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(async function (url) {
      const response = await fetch(url)
      return response.json()
    })
  )
  console.log('users', users)
  console.log('posta', posts)
  console.log('albums', albums)
}

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholdeTYPO.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]


const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(
            urls.map(async function (url) {
              const response = await fetch(url)
              return response.json()
            })
          )
          console.log('users', users)
          console.log('posts', posts)
          console.log('albums', albums)
    }
    catch (err) {
        console.log('oooooops', err)
    }
  }