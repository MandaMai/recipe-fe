/**
 * StudentController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Client = require('node-rest-client').Client;
var client = new Client();
var endpoint = "https://arcane-harbor-36178.herokuapp.com/api/recipes"

module.exports = {

  /**
   * `StudentController.create()`
   */
  create: function (req, res) {

        if(req.method != "POST"){
          return res.view('create');
        }

        var args = {
            data: req.body,
            headers: { "Content-Type": "application/json" }
        };

        client.post(endpoint, args, function (data, response) {
          sails.log(JSON.stringify(data, null, 2))
            // return res.view('create', {success: { message: "Record added successfully"}});
            if(response.statusCode != "200"){
                req.addFlash("error", data.message.substring(data.message.indexOf("•")));
                return res.redirect('/create');
            }

            req.addFlash("success", "Record created successfully");
            return res.redirect('/create');

        })

  },

  create_instruction: function(req, res) {

  },//end create_instruction

  create_ingredient: function(req, res) {

  },


  /**
   * `StudentController.read()`
   */
  read: function (req, res) {

    client.get(endpoint, function (data, response) {
        sails.log(JSON.stringify(data, null, 2))
        return res.view('read', {recipes: data});
    }).on('error', function (err) {
        return res.view('read', {error: { message: "There was an error getting the recipes"}});
    });

  },


   /**
   * `StudentController.update()`
   */
  update: function (req, res) {

    if(req.method != "POST"){

      client.get(endpoint, function (data, response) {
        return res.view('update', {recipes: data});
      }).on('error', function (err) {
          return res.view('update', {error: { message: "There was an error getting the recipes"}});
      });

    }else{

      var args = {
          data: req.body,
          headers: { "Content-Type": "application/json" }
      };

      client.put(endpoint + "/" + req.body.id, args, function (data, response) {

        if(response.statusCode != "200"){
            req.addFlash("error", data.message);
            return res.redirect('/update');
        }

        req.addFlash("success", "Record updated successfully");
        return res.redirect('/update');

      })

    }
  },

  /**
   * `StudentController.delete()`
   */
  delete: function (req, res) {

    if(req.method != "POST"){
      sails.log(JSON.stringify(data, null, 2))
      client.get(endpoint, function (data, response) {
        return res.view('delete', {recipes: data});
      }).on('error', function (err) {
          return res.view('delete', {error: { message: "There was an error getting the students"}});
      });

    }else{

      client.delete(endpoint + "/" + req.body.id, function (data, response) {

        if(response.statusCode != "200"){
            req.addFlash("error", data.message);
            return res.redirect('/delete');
        }

        req.addFlash("success", "Record deleted successfully");
        return res.redirect('/delete');

      })
    }

  }

};