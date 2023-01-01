StudtentsList = [];
class Student {
    constructor(no, uname, sname, program, mobi) {
        this.no = no;
        this.uname = uname;
        this.sname = sname;
        this.program = program;
        this.mobi = mobi;
    }
}
// a function to make a captcha
function addcap() {

    var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'
        , 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var a = alpha[Math.floor(Math.random() * 62)];
    var b = alpha[Math.floor(Math.random() * 62)];
    var c = alpha[Math.floor(Math.random() * 62)];
    var d = alpha[Math.floor(Math.random() * 62)];
    var e = alpha[Math.floor(Math.random() * 62)];
    var f = alpha[Math.floor(Math.random() * 62)];

    var sum = a + b + c + d + e + f;

    document.getElementById("capt").value = sum;
};

function AddStud() {
    var no = document.getElementById("res").children.length + 1;
    var uname = document.getElementById("uname").value;
    var sname = document.getElementById("sname").value;
    var program = document.getElementById("program1").value;
    var mobi = document.getElementById("mob").value;
    var string1 = document.getElementById("capt").value;
    var string2 = document.getElementById("textinput").value;
    var e = new Student(no, uname, sname, program, mobi);
    

    // pattern match to the boxes
    var u = uname.search(/[A-Z][a-z]+_\d+/);
    var s = sname.search(/[ا-ي]+\s[ا-ي]+/);
    var m = mobi.search(/\+963-9\d{8}||\+\d+-\d{7}/);
    let isPhone = false;
    let firstNumber = [3,4,5,6,8,9];
    // if (!((mobi.substr(0, 4) === "+963" && mobi.length === 13 && firstNumber.includes(parseInt(mobi.substr(5,1))) )|| mobi.length === 11)) 
    //     alert("please enter a valid data")
    
    StudtentsList.sort(function (e1, e2) {
        return e1.uname.match(/\d+/)[0] - e2.uname.match(/\d+/)[0];

    });

    // if pattern match is correct add data to table if not show an alert to the user
    if (u == 0 && s == 0 && m == 0 && string1 == string2 && uname != "" && sname != "" && mobi != "" && string1 != "" && string2 != "" && (mobi.substr(0, 4) === "+963" && mobi.length === 13 && firstNumber.includes(parseInt(mobi.substr(5,1))) )|| mobi.length === 11) {
        var s = " ";
        StudtentsList.push(e);
        StudtentsList.forEach((e) =>
            s += "<tr><td>" + e.no + "</td><td>" + e.uname + "</td><td>" + e.sname + "</td><td>" + e.program + "</td></tr>");
        document.getElementById("res").innerHTML = s;
        document.getElementById("uname").value = "";
        document.getElementById("sname").value = "";
        document.getElementById("mob").value = "";
        document.getElementById("textinput").value = "";
        document.getElementById("date").value = "";
    } else {
        alert("please enter a valid data")
    }
    addcap();
    console.log("win")
}

function sortty(cho) {
    switch (cho) {
        case Nuser:
            StudtentsList.sort(function (e1, e2) {
                return e1.uname.match(/\d+/)[0] - e2.uname.match(/\d+/)[0];

            });
            var s = " ";
            StudtentsList.forEach((e) =>
                s += "<tr><td>" + e.no + "</td><td>" + e.uname + "</td><td>" + e.sname + "</td><td>" + e.program + "</td></tr>");

            document.getElementById("res").innerHTML = s;
            break;

        case Nstudent:
            StudtentsList.sort(function (e1, e2) {
                if (e1.sname < e2.sname) return -1;
                if (e1.sname > e2.sname) return 1;
                return 0;
            });
            var s = " ";
            StudtentsList.forEach((e) =>
                s += "<tr><td>" + e.no + "</td><td>" + e.uname + "</td><td>" + e.sname + "</td><td>" + e.program + "</td></tr>");
            document.getElementById("res").innerHTML = s;
            break;
        case Prog:
            StudtentsList.sort(function (e1, e2) {
                if (e1.program < e2.program) return -1;
                if (e1.program > e2.program) return 1;
                return 0;
            });
            var s = " ";
            StudtentsList.forEach((e) =>
                s += "<tr><td>" + e.no + "</td><td>" + e.uname + "</td><td>" + e.sname + "</td><td>" + e.program + "</td></tr>");
            document.getElementById("res").innerHTML = s;
            break;
    }
};

function getsel() {
    var selt = document.getElementById("program12");
    for (index = 0; index < selt.length; index++) {
        if (selt.value == "ALL") {
            var s = " ";
            StudtentsList.forEach((e) =>
                s += "<tr><td>" + e.no + "</td><td>" + e.uname + "</td><td>" + e.sname + "</td><td>" + e.program + "</td></tr>");
            document.getElementById("res").innerHTML = s;
            break;
        }
        if (selt.value == "BAIT") {
            const filt = StudtentsList.filter(function (e1) {
                return e1.program.includes("bait");
            });
            var s = "";
            filt.forEach((e) =>
                s += "<tr><td>" + e.no + "</td><td>" + e.uname + "</td><td>" + e.sname + "</td><td>" + e.program + "</td></tr>");
            document.getElementById("res").innerHTML = s;
            break;
        }
        else if (selt.value == "BIT") {
            const filt = StudtentsList.filter(function (e1) {
                return e1.program.includes("bit");
            });
            var s = "";
            filt.forEach((e) =>
                s += "<tr><td>" + e.no + "</td><td>" + e.uname + "</td><td>" + e.sname + "</td><td>" + e.program + "</td></tr>");
            document.getElementById("res").innerHTML = s;
            break;
        }
        else if (selt.value == "TIC") {
            const filt = StudtentsList.filter(function (e1) {
                return e1.program.includes("tic");
            });
            var s = "";
            filt.forEach((e) =>
                s += "<tr><td>" + e.no + "</td><td>" + e.uname + "</td><td>" + e.sname + "</td><td>" + e.program + "</td></tr>");
            document.getElementById("res").innerHTML = s;
            break;
        }

    }
};

function conv() {
    console.log(StudtentsList);
    var con = JSON.stringify(StudtentsList);
    console.log(typeof con)
    document.getElementById("textA").value = con;
}

















