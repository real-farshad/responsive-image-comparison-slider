const slider: HTMLElement = document.querySelector(".compare-images__slider");
const sliderModifiedImage: HTMLElement = document.querySelector(".slider__modified");
const sliderBorder: HTMLElement = document.querySelector(".slider__border-selector");
const borderSelectorBar: HTMLElement = document.querySelector(".border-selector__bar");
const borderSelectorBall: HTMLElement = document.querySelector(".border-selector__ball");

// HANDLE MOUSE
sliderBorder.addEventListener("mousedown", (): void => {
    slider.addEventListener("mousemove", handleMouseMoveOnSlider);
});

// mouseleave would also work but mouseup has a better UX
sliderBorder.addEventListener("mouseup", (): void => {
    slider.removeEventListener("mousemove", handleMouseMoveOnSlider);
});

function handleMouseMoveOnSlider(e: MouseEvent): void {
    let borderOffsetY: number;

    // The eventlistener might return an event object on one of the child elements
    if (e.target === borderSelectorBall) {
        // Calculate the offset from center of the ball
        borderOffsetY = sliderModifiedImage.offsetHeight + (e.offsetY - 30);
    } else if (e.target === borderSelectorBar) {
        // Calculate the offset from center of the border
        borderOffsetY = sliderModifiedImage.offsetHeight + (e.offsetY - 5);
    } else {
        // If eventlistener is on the slider just return the offsetY's value
        borderOffsetY = e.offsetY;
    }

    sliderBorder.style.top = `${borderOffsetY}px`;
    sliderModifiedImage.style.height = `${borderOffsetY}px`;
}

// HANDLE TOUCH
sliderBorder.addEventListener("touchstart", (): void => {
    slider.addEventListener("touchmove", handleTouchMoveOnSlider);
});

sliderBorder.addEventListener("touchend", (): void => {
    slider.removeEventListener("touchmove", handleTouchMoveOnSlider);
});

function handleTouchMoveOnSlider(e: TouchEvent): void {
    const borderOffsetY: number = e.touches[0].clientY - slider.getBoundingClientRect().top;

    // If offsetY position is outside of intended boundaries, don't move the border and just return
    if (borderOffsetY < 0 || borderOffsetY > slider.getBoundingClientRect().height) return;

    sliderBorder.style.top = `${borderOffsetY}px`;
    sliderModifiedImage.style.height = `${borderOffsetY}px`;
}

// HANDLE RESIZE
window.addEventListener("resize", (): void => {
    const modifiedImageHeight: number = sliderModifiedImage.getBoundingClientRect().height;
    const sliderHeight: number = slider.getBoundingClientRect().height;

    if (modifiedImageHeight > sliderHeight) {
        sliderBorder.style.top = `${sliderHeight / 2}px`;
        sliderModifiedImage.style.height = `${sliderHeight / 2}px`;
    }
});
