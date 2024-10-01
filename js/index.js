//Write your Javascript code here
console.log("Shoppinglist")


function NewLiElement(className, id, content) 
{
    let element = document.createElement("li")
    element.setAttribute("class", className)
    element.setAttribute("id", id)
    element.append(document.createTextNode(content))
    return element

}

let element = NewLiElement("boomkin", "1", "hehhehe")

console.log(element)