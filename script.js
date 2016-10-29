//find a password in Wodnik<-----------------
        var url1 = "http://api.wordnik.com:80/v4/word.json/";
        var word = "rainbow";
        var url2= "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
        
        var link="rainbow";
        
        function setup(){
            link = createA('#', word);
            link.mousePressed(askWodnik);
            loadJSON(url1+ word +url2, gotData);
            
        }
        function askWodnik(){
            loadJSON(url1+word+url2, gotData);
        }
        
        function gotData(data){
        var index1=floor(random(0, data.length));
        var index2=floor(random(0, data[index1].words.length));
        word= data[index1].words[index2];

        }
// check that pass has max 11 chars
        if (word.length>11)
        {
            setup();
        }
        else
        {
            
            // set a pass
            
            var password = word.toUpperCase();
            
            var p_length = password.length;
            
            
            
            window.onload = start;
            
            
            function start(){
                
            // set blocks on the page
                var tresc_diva ="";
                
                var i;
                for (i=0; i<11; i++)
                {
                    if (p_length<11-i)
                    {
                        //nie ma w hasle
                    tresc_diva = tresc_diva + '<div class="pass2"></div>';
                    }
                    else 
                    {
                    tresc_diva = tresc_diva + '<div class="pass" id="pass"+"+i+"></div>';
                    }
                    
                }
                document.getElementById("pass1").innerHTML = tresc_diva;
            //set block of the page end
            
                var key1 = "";
                
                document.getElementById("letters").innerHTML = key1;
                
                window.addEventListener('keydown', function(event) {
                var key = event.key.toUpperCase();
                
                var ilosc_skuch=0;
                
                for (k=0; k<p_length; k++)
                {
                    if (password.charAt(k)==key)
                    {
                        document.getElementById(k).innerHTML = key;
                    }
                    else
                    {
                        ilosc_skuch++;
                    }
                }    
                
                    if (ilosc_skuch<12)
                    {
                        key1=key1;
                        document.getElementById("returnGame").style.opacity = "0.8";
                        document.getElementById("returnGame2").innerHTML = 
                        "<h2>GAME OVER</h2>"+
                        "<button>NEW WORD</button>";
                    }
                    else
                    {
                        key1=key1 + " " + key;
                    }
                        document.getElementById("letters").innerHTML = key1;
                        
                
                }, false);
                

            }
        }