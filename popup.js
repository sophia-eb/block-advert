function onWindowLoad() {

    let blockVideo = document.getElementById("blockVideo");

    // When the button is clicked, inject setPageBackgroundColor into current page
    blockVideo && blockVideo.addEventListener("click", async () => {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: blockVideoArea,
        });
    });

    // The body of this function will be executed as a content script inside the current page
    function blockVideoArea() {
        // const videoAnswerPlayer = document.getElementsByClassName("VideoAnswerPlayer-video")
        // const zVideoItemVideo = document.getElementsByClassName("ZVideoItem-video")
        const zVideoItem = document.getElementsByClassName("ZVideoItem");

        for(let i=zVideoItem.length-1; i>=0; i--){
            if (zVideoItem[i] != null)
                zVideoItem[i].parentNode.removeChild(zVideoItem[i]);
        }
    }

    let blockAdvert = document.getElementById("blockAdvert");

    blockAdvert && blockAdvert.addEventListener("click", async () => {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: blockAdCard,
        });
    });

    function blockAdCard() {
        const advertCard = document.getElementsByClassName("TopstoryItem--advertCard");

        for(let i=advertCard.length-1; i>=0; i--){
            if (advertCard[i] != null)
                advertCard[i].parentNode.removeChild(advertCard[i]);
        }
    }

}

window.onload = onWindowLoad;
