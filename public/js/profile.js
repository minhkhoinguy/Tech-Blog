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

document.querySelectorAll(".delbtn").forEach((element, i) => {
    console.log(element)
    console.log(element.getAttribute("data-blog"))
    // this is id
    element.addEventListener("click", e=> {
        console.log("hello world")
        e.preventDefault()
        const deleteObj = {
            // element:document.querySelectorAll(".displayBlog").value,
            title:document.querySelector("#title").value,
            body:document.querySelector("#body").value,
        }
        fetch(`/api/blogs/${element.getAttribute("data-blog")}`,{
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

document.querySelectorAll(".updatebtn").forEach((element, i) => {
    console.log(element)
    console.log(element.getAttribute("data-blog"))
    element.addEventListener("click", e=> {
        console.log("hello world")
        e.preventDefault()
        const updateObj = {
            title:document.querySelectorAll(".updateTitle")[i].value,
            body:document.querySelectorAll(".updateBody")[i].value,
        }
        fetch(`/api/blogs/${element.getAttribute("data-blog")}`,{
            method:"PUT",
            body:JSON.stringify(updateObj),
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
