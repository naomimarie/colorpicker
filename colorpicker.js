function changeColorConverter() {
    // Get R, G, B values and convert to integer
    var r = parseInt(document.getElementById("r").value);
    var g = parseInt(document.getElementById("g").value);
    var b = parseInt(document.getElementById("b").value);

    // Generate color to change square color
    var color = "#" + hex(r) + hex(g) + hex(b);

    //Generate ρɣβL code
    //var prismColor = "(" + L +")"
    //var prismColor = "(" + rho + "," + gamma + "," +  beta + ","  + L +")"

    //Change square color
    document.getElementById("box").style.backgroundColor = color;

    //Test to show converting is happening -- will change later to ρɣβL code--
    //document.getElementById("ρɣβL-label").innerText = color;

    //document.getElementById("ρɣβL-label").innerText = prismColor;
    document.getElementById("r").innerText = r;
    document.getElementById("g").innerText = g;
    document.getElementById("b").innerText = b;

    if(r < 100 && g <100 && b < 100) {
        document.getElementById("box").style.color = "white";
    } else {
        document.getElementById("box").style.color = "black";
    }


}


function hex(v) {
    // Get hexadecimal numbers.
    var hex = v.toString(16);
    if (v < 16) {
        hex = "0" + hex;
    }
    return hex;
}
