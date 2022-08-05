MicroModal.init({
    // onShow: modal => console.info(`${modal.id} is shown`), // [1]
    // onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    openTrigger: 'data-micromodal-trigger', // [3]
    closeTrigger: 'data-custom-close', // [4]
    disableScroll: true, // [5]
    disableFocus: false, // [6]
    awaitOpenAnimation: false, // [7]
    awaitCloseAnimation: false, // [8]
    debugMode: true, // [9]
});

// Копирование и выделение артикула
const copySelectArticle = () => {
    const btnPlaceArticle = document.querySelector('.copy');
    btnPlaceArticle.addEventListener('click', (event) => {
        copyArticle();
    });
};
copySelectArticle();

// копирование текста
const copyArticle = () => {
    let elem = document.querySelector('.copy-text');
    selectTextArticle();

    if (elem) {
        navigator.clipboard
            .writeText(elem.innerHTML)
            .then(() => {
                document.querySelector('.out').innerHTML += '';
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

// выделение текста
const selectTextArticle = () => {
    const range = new Range();
    range.selectNode(jsArticle);
    document.getSelection().addRange(range);
};
