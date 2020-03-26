import axios from "axios";

const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
let deleteBtnArr;

function decreaseCommentNum() {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
}

function deleteComment(li) {
    li.remove();
    decreaseCommentNum();
}

async function handleDeleteButton(event) {
    const li = event.target.closest("li");
    const comment = li.querySelector("span").innerHTML;
    const id = window.location.href.split("/videos/")[1];
    const response = await axios({
        url: `/api/${id}/deletecomment`,
        method: "POST",
        data: { comment },
    });
    if (response.status === 200) {
        deleteComment(li);
    }
}

const init = () => {
    deleteBtnArr = commentList.getElementsByClassName("deleteBtn");

    Array.prototype.forEach.call(deleteBtnArr, deleteBtn =>
        deleteBtn.addEventListener("click", handleDeleteButton),
    );
};

if (commentList) {
    init();
}

export default handleDeleteButton;
