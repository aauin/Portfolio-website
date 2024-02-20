document.addEventListener("DOMContentLoaded", function () {
    var leftSideParagraph5 = document.querySelector(".left-side p:nth-child(5)");
    var leftSideParagraph6 = document.querySelector(".left-side p:nth-child(6)");
    var leftSideParagraph7 = document.querySelector(".left-side p:nth-child(7)");
    var leftSideParagraph8 = document.querySelector(".left-side p:nth-child(8)");

    var initialFontSize5 = parseInt(getComputedStyle(leftSideParagraph5).fontSize);
    var initialFontSize6 = parseInt(getComputedStyle(leftSideParagraph6).fontSize);
    var initialFontSize7 = parseInt(getComputedStyle(leftSideParagraph7).fontSize);
    var initialFontSize8 = parseInt(getComputedStyle(leftSideParagraph8).fontSize);

    var rightSide = document.querySelector(".right-side");

    rightSide.addEventListener("scroll", function () {
        var scrollPosition = rightSide.scrollTop;

        var triggerPoint1 = 300;
        var triggerPoint2 = 1600;
        var triggerPoint3 = 2400;
        var triggerPoint4 = 3000;

        // Calculate the new font size for child 5 based on the scroll position
        var newFontSize5 = Math.min(initialFontSize5 + scrollPosition, initialFontSize5 / 1.3);
        var newFontSize6 = Math.min(initialFontSize6 + scrollPosition - triggerPoint1, initialFontSize6 * 1.3);
        var newFontSize7 = Math.min(initialFontSize7 + scrollPosition - triggerPoint2, initialFontSize7 * 1.3);
        var newFontSize8 = Math.min(initialFontSize8 + scrollPosition - triggerPoint3, initialFontSize8 * 1.3);

        // Check if scrollPosition is within the trigger range for child 5
        if (scrollPosition >= triggerPoint1) {
            leftSideParagraph5.style.fontSize = Math.max(13, newFontSize5) + "px";
        } else {
            leftSideParagraph5.style.fontSize = initialFontSize5 + "px";
        }

        // Check if scrollPosition is within the trigger range for child 6
        if (scrollPosition >= triggerPoint1 && scrollPosition <= triggerPoint2) {
            leftSideParagraph6.style.fontSize = newFontSize6 + "px";
        } else {
            leftSideParagraph6.style.fontSize = initialFontSize6 + "px";
        }

        // Check if scrollPosition is within the trigger range for child 7
        if (scrollPosition >= triggerPoint2 && scrollPosition <= triggerPoint3) {
            leftSideParagraph7.style.fontSize = newFontSize7 + "px";
        } else {
            leftSideParagraph7.style.fontSize = initialFontSize7 + "px";
        }

        // Check if scrollPosition is within the trigger range for child 8
        if (scrollPosition >= triggerPoint3 && scrollPosition <= triggerPoint4) {
            leftSideParagraph8.style.fontSize = newFontSize8 + "px";
        } else {
            leftSideParagraph8.style.fontSize = initialFontSize8 + "px";
        }
    });
});
