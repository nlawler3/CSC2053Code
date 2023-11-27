console.log(document);
console.log(document.URL);
console.log(document.inputEncoding);


function afterLoading(){
    let list1 = document.getElementsByTagName("li"); //getting the list elements
    console.log(list1 + "length of list1 is " + list1.length) //printing the output and length to console

    for(let i = 0; i< list1.length;i++){
        console.log(list1[i].innerHTML); //printing the actual HTML code
        console.log(list1[i].textContent); //printing the content to console
    }

    let tdNode = document.getElementById("checkingBalance"); //getting this node by using its ID
    console.log(tdNode.textContent);//printing the content to the log
    tdNode.textContent = "CHANGED!"; //changing the actual content

    const text = document.createTextNode("Text added to Bottom of page!") //creating text
    let p = document.createElement("p"); //making the paragraph
    p.appendChild(text) //putting the text in the paragraph

    let end = document.getElementById("end");//getting the end node from HTML
    end.appendChild(p);//adding in the paragraph to the that node
}


function depositChecking(){
    let tdNode = document.getElementById("checkingBalance");
    let balance = parseInt(tdNode.textContent, 10); //taking the text and converting it to an int of base 10
    balance += 100; //adding 100
    tdNode.textContent = balance; //putting the new balance into the text content
}


function depositSavings(){
    let tdNode = document.getElementById("savingsBalance");
    let balance = parseInt(tdNode.textContent, 10); //taking the text and converting it to an int of base 10
    balance += 100; //adding 100
    tdNode.textContent = balance; //putting the new balance into the text content
    let changeNode = document.getElementById("header")
    changeNode.textContent = "Bank Accounts"
}


function emptySavings(){
    let tdNode = document.getElementById("savingsBalance");
    let balance = parseInt(tdNode.textContent, 10); //taking the text and converting it to an int of base 10
    balance = 0; //adding 100
    tdNode.textContent = balance;
 
    let changeNode = document.getElementById("header")
    changeNode.textContent = "ALERT: Savings Empty!"
}