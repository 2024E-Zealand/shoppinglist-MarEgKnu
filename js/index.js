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
function AppendListElement(listElement, id) 
{
    let element = document.getElementById(id)
    element.append(listElement)
}



AppendListElement(NewLiElement("", "haha", "lmao"),"list" )