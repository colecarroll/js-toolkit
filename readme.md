# JS Toolkit: a training application for beginners to JavaScript

[Deployed Site](https://www.jstoolkit.io)

[Youtube Walkthrough](https://youtu.be/w3dXfNHWhdo)

## Instructions

**To run locally**

* Fork and clone the respo
* In command line, git clone {insert-your-repo-SSH-key}
* Run npm install in the root and the client file
* Run brew install yarn
* In order to view on your local host, run the commmand 'npm run dev'
* You will likelly need/want to create an [Mlab Account](https://mlab.com) and create a MongoDB deployment for development. You can then store the MONGO_URI in a dev.js file in /config/ file
* You will also need to sign up for [google's google+ oauth api](https://console.developers.google.com) and create a development Google Client Secret and Google Client Id in that dev.js file in /config/. You can search on googles developer console for 'Google+' and that should bring up the correct api
* You will also need to set your own cookieKey in a dev.js file in /config/ file. That way index.js of the server will be able to use that variable.

**Future Iterations**

1. The code block testing needs to be built out to dynamically test user code entries, accounting for spaces, syntax variations, etc. A secure console needs to be able to run user code entries as javascript, compare them to a database entry and return true or false depending on if the values returned match or not
2. The MailChimp API will be integrated once a proper testing structure has been put in place and lessons can be built out
3. The ranking system will be built out next, which will be very simple based on the switch statement in the code base, once a proper testing console is in place and the mailchimp api is integrated

**To Contribute**

* Contribute lessons by issuing a pull request. Creat a new file in the _client/src/lessons_content_ folder and set up the file with the following structure. See the existing file _lesson_01_arr_length_ for how the following may be written

* **category**: Array (or String, Math, Object)
* **method_name**: e.g. Array.map
* **Title**: (a fun title that encapsulates what the user will be learning about)
* **Technical Summary**: e.g. Array.map() is used for xyz and is useful in xyz situations and contexts.
* **Content 1**: (this needs to be in markdown!) This is the layman terms explanation for what the method does and how its used.
* **Youtube URL**: the url of your youtube education lesson. (every lesson must have a youtube tutorial)
* **Code Challenge Description 1**: (must be in markdown) a description of the first code challenge using that method
* **Solution for Code Challenge 1**: (not in markdown)
* **Code Challenge Description 2**: (must be in markdown) a description of the second code challenge using that method
* **Solution for Code Challenge 2**: (not in markdown)
* **Content 2**: this is a wrap up of the lesson

Please email colecarroll2@gmail.com with any questions or help
