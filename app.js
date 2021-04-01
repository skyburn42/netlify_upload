let para = document.getElementById("demo")
para.innerHTML = "helloworld"
para.style.color = "pink"

document.getElementById("wolfpic").style.width = "400px"


const changePic = () => {
  document.getElementById("wolfPic").src="https://images.unsplash.com/photo-1590362891991-f776e747a588?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
}
document.getElementById("btn").addEventListener("click", changePic)