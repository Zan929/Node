
let oldDataLenght = 0;
function getComments(){
fetch(location.origin + "/getComments")
.then(dt => dt.json())
.then(dt => {
    if(dt.lenght == oldDataLenght){
        console.log("Nie ma nowych komentarzy");
        return;
    }else{
        oldDataLenght = dt.lenght;
    }
    

    dt.reverse();
    const commentSection = document.querySelector(".commentSection")
    commentSection.innerText = "";
//Pętla, która wyświetla wszystkie komentarze osobnoe//
    for(let comment of dt){
        const article = document.createElement("article");
        // console.log(comment)

        const nick = document.createElement("div");
        nick.innerText = comment.nick;
        article.append(nick);

        const content = document.createElement("div");
        content.innerText = comment.comment;
        article.append(content);

        document.querySelector(".commentSection").append(article);
    }





})
}
getComments()
const form = document.querySelector("form");
form.addEventListener("submit", e => {
    e.preventDefault();

    const nick = form[0].value;
    const comment = form[1].value;
    console.log(nick ,comment)
    console.log(form.action);
    fetch(form.action + "?nick=" + nick +"&comment=" + comment)
    .then(dt => dt.text())
    .then(dt =>{
        console.log(dt)
    getComments()
    })
})

setInterval(getComments, 1000)