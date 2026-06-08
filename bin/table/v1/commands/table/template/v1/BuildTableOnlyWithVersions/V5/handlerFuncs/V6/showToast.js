const showToast = ({ message }) => {
    const toastDiv = document.createElement("div");

    toastDiv.innerHTML = message;

    toastDiv.style.position = "fixed";
    toastDiv.style.top = "20px";
    toastDiv.style.right = "20px";
    toastDiv.style.backgroundColor = "green";
    toastDiv.style.color = "white";
    toastDiv.style.padding = "10px 20px";
    toastDiv.style.borderRadius = "5px";
    toastDiv.style.zIndex = "1000";

    document.body.appendChild(toastDiv);

    setTimeout(() => {
        toastDiv.remove();
    }, 3000);
};

export { showToast };