


function toggleModal() {
    const getModal = document.querySelector(".modal")
    if (getModal.style.display == 'none') {
        getModal.style.display = "block";
        getModal.style.background = "rgb(0 0 0 / 75%)";
    } else {
        getModal.style.display = " none"
    }
}


