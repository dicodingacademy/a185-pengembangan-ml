// ----Kolom deklarasi variabel-----


// -----------------------------------

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loaderlabel").style.display = "none";
    document.getElementById("loader").style.display = "none";       
    document.getElementById("mainAPP").style.display = "block";
}

function detectWebGLContext () {
    // Create canvas element. The canvas is not added to the
    // document itself, so it is never displayed in the
    // browser window.
    var canvas = document.createElement("canvas");
    // Get WebGLRenderingContext from canvas element.
    var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    // Report the result.
    if (gl && gl instanceof WebGLRenderingContext) {
        console.log("Congratulations! Your browser supports WebGL.");
        init();
    } else {
        alert("Failed to get WebGL context. Your browser or device may not support WebGL.");
    }
}

detectWebGLContext();

// ----Kolom fungsi `getInput()`-----


// -----------------------------------


// ----Kolom fungsi `padSequence()`-----


// -----------------------------------


// ----Kolom fungsi `predict()`-----


// -----------------------------------


// ----Kolom fungsi `onClick()`-----


// -----------------------------------


// ----Kolom fungsi `init()`-----


// -----------------------------------