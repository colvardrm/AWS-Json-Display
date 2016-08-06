# AWS-Json-Display

This consists of an Elm front end and an Erlang back end. Bootstrap is used for styling the front end. The Elm uses the following packages in addition to elm-lang/core and elm-lang/html:

NoRedInk/elm-decode-pipeline 1.1.2 <= v < 2.0.0     
elm-lang/websocket: 1.0.1 <= v < 2.0.0    
evancz/elm-http: 3.0.1 <= v < 4.0.0    
justinmimbs/elm-date-extra: 1.0.1 <= v < 2.0.0   
krisajenkins/elm-dialog: 3.0.2 <= v < 4.0.0   
mgold/elm-date-format: 1.1.4 <= v < 2.0.0   

The front end was coded in Elm v 0.17. To compile the main file, the command is:  
elm make DisplayJson.elm --output=Display.js

Then open DisplayJson.html in your browser. To get data from your server, run the backend with rebar3, and specify the websocket address to connect to in DisplayJson.elm. The variable name is websocketAddress.
