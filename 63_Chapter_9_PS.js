// Problem 1 write a program to load a javascript file in a browser using promises. use .then  to display an alert when the script is complete

const loadScript = async(src)=>{
  return new Promise((resolve,reject)=>{
    let script = document.createElement('script')
    script.scr= src;
    script.onload = ()=>{
      // resolve(src +"Done Success")
      reject("Something went wrong")
    }
    document.head.append(script)
  })
}

let a = loadScript("https://cdn.jsdelivr.net/npm.bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")

a.then((value)=>{
  alert(value)
}).catch((error)=>{
  console.log(error)
})


// problem 3

let p = () => {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      reject(new Error("Error Occured"))
    }, 3000);

  })
}


let a1 = async () => {
  try {
    let c = await p()
    console.log(c)
  } catch (error) {
    console.log("This error has been Handled")
  }
}

a1()


// problem 4


let p1 = async()=>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10)
    }, 3000);
})
} 

let p2 = async()=>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10)
    }, 3000);
})
} 

let p3 = async()=>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10)
    }, 3000);
})
} 



let run = async () => {
  let a1 = p1()
  let a2 = p2()
  let a3 = p3()
  console.time("timer")
  let a1a2a3 = await Promise.all([a1, a2, a3])
  console.log(a1a2a3); //  [10, 20, 30]
  console.timeEnd("timer") //timer: 3008.703125 ms
}

run()

console.log(3+true)






