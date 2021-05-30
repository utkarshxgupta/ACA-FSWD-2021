var x = document.getElementById("login");
var y = document.getElementById("signup");
function loginbutton() {
  if (y.style.display === "block") {
    y.style.display = "none";
  }
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function signupbutton() {
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
let tokenbutton = document.getElementById("GetToken")
tokenbutton.onclick = async function()
{   let RESP = await fetch('http://localhost:12345/get_token');
    let res =  await RESP.text();
    var start=res.indexOf(':');
    var end=res.lastIndexOf('"');
    var finres=res.slice(start+3,end);
    var disp1 = document.getElementById("DisplayToken");
    disp1.innerHTML="Your Token is : " + finres ;
}
let register = document.getElementById("Register")
register.onclick = async function() {
    var op = {
        "username" : String(document.getElementById("Username").value),
        "data" : String(document.getElementById("Data").value),
        "token" : String(document.getElementById("Token").value),
    }
    let r1 = await fetch('http://localhost:12345/register' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(op)
    });
    console.log(r1);
    if (r1.ok) {
        alert("Registeration successful.");
    }
}
let vd= document.getElementById("ViewData");
vd.onclick =  async function() {
    var data_token = {
        "token" : String(document.getElementById("DataToken").value)
    }
    let r2 = await fetch('http://localhost:12345/get_data' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_token)
    })
    console.log(r2);
    if(r2.ok) {
        let b = await r2.text();
        var startdata=b.indexOf(":");
        var enddata=b.indexOf(",");
        var startname=b.lastIndexOf(":");
        var endname=b.lastIndexOf('"');
        var disp2 = document.getElementById("MessageLogin");
        var user=b.slice(startname+3,endname);
        var dataa=b.slice(startdata+3,enddata-1);
        disp2.innerHTML="Your Username is : "+ user +" <br> Your Data is : " + dataa;
        }
    }