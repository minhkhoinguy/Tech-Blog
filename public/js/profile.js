console.log("hello")
document.querySelector("#newBlog").addEventListener("submit",e=>{
    e.preventDefault()
    const blogObj = {
        title:document.querySelector("#title").value,
        body:document.querySelector("#body").value,
    }
    console.log(blogObj)
    fetch("/api/blogs",{
        method:"POST",
        body:JSON.stringify(blogObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})

document.querySelectorAll(".displayBlog").forEach((element, i) => {
    console.log(element)
    console.log(element.getAttribute("data-blog"))
    // this is id
    element.addEventListener("delete", e=> {
        console.log("hello world")
        e.preventDefault()
        const deleteObj = {
            // element:document.querySelectorAll(".displayBlog").value,
            title:document.querySelector("#title").value,
            body:document.querySelector("#body").value,
        }
        fetch("/api/blogs",{
            method:"DELETE",
            body:JSON.stringify(deleteObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(res.ok){
               location.reload()
            } else {
                alert("trumpet sound")
            }
        })
    })
})

// document.querySelectorAll(".displayBlog").addEventListener("delete",e=>{
//     e.preventDefault()
//     const deleteblogObj = {
//         title:document.querySelector("#title").value,
//         body:document.querySelector("#body").value,
//     }
//     fetch("/api/blogs",{
//         method:"DELETE",
//         body:JSON.stringify(deleteblogObj),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     }).then(res=>{
//         if(res.ok){
//            location.reload()
//         } else {
//             alert("trumpet sound")
//         }
//     })
// })
// var arr = [1, 2, 3, 4, 5, 6]

// arr.filter((element) => {
//     element % 2 == 0
// })
//  console.log(arr.forEach((element, i) => {
//    console.log(element)
// }))
// console.log(document.querySelectorAll(".bingbong"))


// Create Read Update Delete