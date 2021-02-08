var globalVariable;

        function printChecked(val) {
            globalVariable = val;
          
            for (var i = 1; i <= 30; i++) {
                for (var j = 65; j <= 70; j++) {
                    var a = i + "-" + String.fromCharCode(j);
                    if (val == a) {
                        var selectedimage = document.getElementById(a);
                        var selectedbutton = document.getElementById("button:" + a);
                        selectedimage.style.color = '#06ce6a';
                        selectedbutton.style.backgroundColor = '#6eec83';

                    } else {
                        var image = document.getElementById(a);
                        image.style.color = '#414242';

                        var button = document.getElementById("button:" + a);
                        button.style.backgroundColor = 'white';
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

      