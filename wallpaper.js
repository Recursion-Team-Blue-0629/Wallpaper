function speechWallPaper(paperObj){
    const container = document.createElement("div");
    container.classList.add("d-flex", "frame");
    const imgFrame = document.createElement("div");
    container.append(imgFrame);
    imgFrame.classList.add("d-flex", "justify-content-center", "align-items-center");

    const background = document.createElement("img");
    background.classList.add("bg-img", `wallpaper${paperObj.id}`);
    background.src = paperObj.url;
    imgFrame.append(background);

    const textCon = document.createElement("div");
    textCon.classList.add("d-flex");
    const quote = document.createElement("h1");
    quote.style.color = "#" + paperObj.color;
    quote.classList.add("quote", `wallpaper${paperObj.id}`);
    quote.innerHTML = paperObj.text;
    textCon.append(quote);
    imgFrame.append(textCon);

    return container;
}

class WallPaper{
    constructor(text, color, url, id){
        this.text = text;
        this.color =color;
        this.url = url;
        this.id = id;
    }
}

const object = document.getElementById("target");

const wallpaper1 = new WallPaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg", 1);
const wallpaper2 = new WallPaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "ecf0f1", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", 2);
const wallpaper3 = new WallPaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", 3);

object.append(speechWallPaper(wallpaper1));
object.append(speechWallPaper(wallpaper2));
object.append(speechWallPaper(wallpaper3));