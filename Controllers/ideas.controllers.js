/**
 * Write the logic to create the controllers or the Idea Resources
 */

const ideas = require ("../Models/ideas.models")

//Initial id

let id = 3;

/**
 * Create the controller for fetching all the ideas
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 * Then, return list of all the ideas
 */

exports.getAllIdeas = (req, res) => {
    //first read all the ideas from the ideas.models.js file
    //Return all those ideas.

    res.status(200).send(ideas)
}


/**
 * Controller that fetches idea based on the id
 * 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas/2
 */

exports.getIdeaBasedOnId = (req, res)=>{

    //We need to first read the idea id from the req path param
    idea_id = req.params.id

    // Using id, check if the idea with that id is present
    if(ideas[idea_id]){
        res.status(200).send(ideas[idea_id])
    }else{
        res.status(404).send({
            message : "Idea with the given idea id not found"
        })
    }

} 



/**
 * Controller to create a new idea
 */

exports.createIdea = (req, res) => {
    // I need to read the request body
    idea_object = req.body
    id++
    idea_object['id'] = id //setting the id in the new created idea object
    ideas[id] = idea_object

     // Add the new object provided in the ideas object

    // Return the response
    res.status(201).send(idea_object)
}

/**
 * Controller for updating the idea
 */

exports.updateIdea = (req, res) => {
    //Read the idea id
    idea_id = req.params.id

    //Check if that idea id is present
    if(ideas[idea_id]){
        idea_object = req.body
        ideas[idea_id] = idea_object
        res.status(201).send(idea_object)
    }else{
        res.status(404).send({
            message:"The id that you provide to upadate is not exist !"
        })
    }
}

/**
 * Controller for deleting the idea
 */


exports.deleteIdea = (req, res) => {
    //read the idea
    idea_id = req.params.id

    //check the idea is exist then delete it otherwise send error message

    if(ideas[idea_id]){
        delete ideas[idea_id]
        res.status(200).send({
            message:"Yay ! Idea deleted successfully"})
        }else{
        res.status(404).send({
            message:"The idea you wanted to delete with given id doesn't exist !"
        })
    }
}

