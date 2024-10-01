//Write your Javascript code here
console.log("Shoppinglist")
var nextId = 4

function NewLiElement(className, id, content) 
{
    let element = document.createElement("li")
    element.setAttribute("class", className)
    element.setAttribute("id", id)
    element.append(document.createTextNode(content))
    return element

}
function AppendListElement(listElement, id) 
{
    let element = document.getElementById(id)
    element.append(listElement)
}

function ChangeClassAttr(element, classValue) 
{
    element.className = classValue
}
function DeleteElement(element) 
{
    element.remove()
}
function ChangeText(element, newText) 
{
    element.textContent = newText
}
function NoOfChildElements(element) 
{
    return element.childElementCount
}
function MoveElement(elementToMove, from, to) 
{
    to.append(elementToMove)
}

function addGood() 
{
    let className = "unhealthy"
    let destList = "listUnhealthy"
    let isHealthy = document.getElementById("isHealthy").checked
    let inputText = document.getElementById("goodsInput").value
    if (isHealthy == true) 
    {
        className = "healthy"
        destList = "list"
    }
    let newElement = NewLiElement(className, nextId.toString(), inputText) 
    nextId = nextId + 1
    newElement.addEventListener("click", function() 
    {
        newElement.hidden = true
    })
    AppendListElement(newElement, destList)

}

document.getElementById("addGoods").addEventListener("click", addGood)



AppendListElement(NewLiElement("", "haha", "lmao"),"list" )

let from = document.getElementById("list")
let to = document.getElementById("listUnhealthy")
let unhealthy = document.getElementsByClassName("unhealthy")
for (var i = 0; i < unhealthy.length; i++) {
    MoveElement(unhealthy[i], from, to); 
}