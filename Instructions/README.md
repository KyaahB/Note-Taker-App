# Note Taker App


## Description

I was given a app full of multiple pages of code which included and multiple html files, a json file, a css file and a javascript file. The pages functionality was very limited so I added the [Server.js File](./server.js) which was built using Express and FS. The addition of middleware along side with API/HTML Routes allowed me to add the notes the app, save them and delete them if needed.

I used the API Routes to create a `app.get`, `app.post` and `app.delete` functions which allowed me to write new notes and save it to not only the browser but also for it to be sent to the db.json file and saved as well. Then I could choose to delete a single note and remove it from the page with a button click connected to the selected note.

I used HTML Routes along with middleware which applied the given styling/structure which allowed me to link all my data and applications to get the app successfuly running.



## Tutorial
 Screenshots of the apps backend and main page: *Located in Assets folder* 
 
 [Screenshot #1](Instructions\Assets\backend-screenshot-1.png)
 [Screenshot #2](Instructions\Assets\Notes-mainpage-screenshot.png)
 [Screenshot #3](Instructions\Assets\Notes-page.png)

 
 [Github Repository](https://github.com/KyaahB/Note-Taker-App)


 [Deployed App:](http://localhost:3000/)

 