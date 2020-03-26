import axios from "axios";
import handleDeleteButton from "./removeComment";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

function increaseNumber() {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
}

function addComment(comment) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    const button = document.createElement("button");
    const i = document.createElement("i");

    span.innerHTML = comment;
    li.appendChild(span);

    i.classList.add("fas", "fa-trash-alt");

    button.classList.add("deleteBtn");
    button.addEventListener("click", handleDeleteButton);
    button.appendChild(i);
    li.appendChild(button);

    commentList.prepend(li);
    increaseNumber();
}

async function sendComment(comment) {
    const id = window.location.href.split("/videos/")[1];
    console.log(id);
    const response = await axios({
        url: `/api/${id}/comment`,
        method: "POST",
        data: { comment },
    });
    if (response.status === 200) {
        addComment(comment);
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const commentInput = addCommentForm.querySelector("input");
    const comment = commentInput.value;
    sendComment(comment);
    commentInput.value = "";
}

function init() {
    addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
    init();
}
