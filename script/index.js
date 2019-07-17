// jS

// creating an element with javaScript
const el = document.createElement('div');
el.classList.add('add-bg');
//**** creating text withe createTextNode
const text = document.createTextNode('Hello World');
//**** appened adds to the bottom
el.append(text);

// adds to top of dom
//el.prepend(text);

// adds event listener to the div and calls handleclick
el.addEventListener('click', handleClick);
// you can have more than one event per div
el.addEventListener('click', secondHandle);

// helper function for el.addEventListener
function handleClick(event) {
    console.log(event)
    const el = document.createElement('div');
    el.innerText = this.innerText;
    //makes a child outside of add-bg class div
    document.body.appendChild(el);
    // makes a child inside add-bg class div
    this.appendChild(el);
    // same as - event.target.appendChild(el);
    //check the console to see key to call 

    // runs alert event 
    // alert(el.innerText);
}

function secondHandle(event) {
    console.log(event.target);
}

//****** */creating text with innernText;
// el.innerText = "Hello again:)";


//**** createing text with innerHTML */
// el.innerHTML = '<strong>Hello Strong</strong>'



//adds the div to the document body
document.body.append(el);