
var getul = document.getElementById('ul')
function foo(){
   var a =  document.getElementById('inp')
var li = document.createElement('li')
var litext = document.createTextNode(a.value)
li.appendChild(litext)
getul.appendChild(li)
a.value = '' 
var deletebtn = document.createElement('button')
var deletebtnText = document.createTextNode('delete')
deletebtn.appendChild(deletebtnText)
li.appendChild(deletebtn)
deletebtn.setAttribute('onclick','del(this)')

var editbtn = document.createElement('button')
var editbtnText = document.createTextNode('edit')
editbtn.appendChild(editbtnText)
li.appendChild(editbtn)
editbtn.setAttribute('onclick','editfunc(this)')
deletebtn.setAttribute('class','btn btn-info aaa')
editbtn.setAttribute('class','btn btn-warning aaa')
}
 function deleteall(){
   getul.innerHTML = ''
 }

 function del(e){
   e.parentNode.remove()
 }

 function editfunc(e){
var a = prompt('enter edit value',e.parentNode.firstChild.nodeValue)
 e.parentNode.firstChild.nodeValue = a
}