const idea_controller = require('../Controllers/ideas.controllers')

/**
 * Create Route for port no. 8000
 */

module.exports = (app) => {
    //GET 127.0.0.1:8000/ideaApp/api/v1/ideas
    app.get("/ideaApp/api/v1/ideas", idea_controller.getAllIdeas)

    //GET 127.0.0.1:8000/ideaApp/api/v1/ideas/:id
    app.get("/ideaApp/api/v1/ideas/:id",idea_controller.getIdeaBasedOnId)

    //POST 127.0.0.1:8000/ideaApp/api/v1/ideas
    app.post("/ideaApp/api/v1/ideas", idea_controller.createIdea )

    //PUT 127.0.0.1:8000/ideaApp/api/v1/ideas/3
    app.put("/ideaApp/api/v1/ideas/:id" , idea_controller.updateIdea)

    //Delete 127.0.0.1:8000/ideaApp/api/v1/ideas/3
    app.delete("/ideaApp/api/v1/ideas/:id" , idea_controller.deleteIdea)
}