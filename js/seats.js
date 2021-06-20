var s = new Map()
          axios.get('http://localhost:3000/seats/')
        .then(response => {
            if (response.data.length > 0) {
                
                    var seats = response.data.map(seat => seat);
                    
                for (var i = 0; i < seats.length; i++) {
                    if (seats[i].taken === "YES")
                    {
                        var sbutton = document.getElementById("button:" + seats[i].seat);
                        sbutton.className="";
                        sbutton.className += "redselect";

                        sbutton.disabled = true;
                        s[seats[i].seat]='YES';
                    }
                }
               
            }

        })
        .catch((error) => {
            console.log(error);
        });

var globalVariable;
function printChecked(val) {
            globalVariable = val;
            for (var i = 1; i <= 30; i++) {
                for (var j = 65; j <= 70; j++) {
                    var a = i + "-" + String.fromCharCode(j);
                    if (val == a) {
                        if (s[a] !== 'YES')
                        {
                            var selectedimage = document.getElementById(a);
                            var selectedbutton = document.getElementById("button:" + a);
                            selectedimage.style.color = '#06ce6a';
                            selectedbutton.style.backgroundColor = '#6eec83';
                        }

                    }
                    else
                    {
                        if (s[a]!=='YES')
                        {
                         var image = document.getElementById(a);
                        image.style.color = '#414242';

                        var button = document.getElementById("button:" + a);
                        button.style.backgroundColor = 'white';

                        }
                    }

                }

            }

}
          


function Seat() {

           var finalseat = globalVariable;
           location.href="https://code-boxx.com/pass-variables-between-pages-javascript/";


        }


        function GotoTable() {

            var seatno = document.getElementById("seatno").value;
            var element = "Table" + seatno;

            var elem = document.getElementById(element);
            elem.scrollIntoView();


        }

      