/**
 * Use DataTables to enhance the functionality of the table on this page.
 *
 * ** NOTE ** All extentsions are availabile in your code already.
 *            You only need to include the javascript and css listed below
 *
 * Here's the documentation you need:
 * https://datatables.net/
 * https://datatables.net/extensions/buttons/examples/
 * https://datatables.net/extensions/colreorder/examples/
 * https://datatables.net/examples/basic_init/scroll_x.html
 *
 */

 (function(){
  let apiUrl = "http://localhost:4242/"
  let selected;
  
   $(function(){
    //add datatables
    $(document).ready(function(){
      $('#recipeTable').DataTable( {
        fixedHeader: true,
        responsive: true,
        scrollY:        200,
        deferRender:    true,
        scroller:       true,
        colReorder: true,
        dom: 'Bfrtip',
        buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
  });

  //getting add form - ingredients
  // $('#addIngredient').on('submit', function(){
    
  //       // alert("item submitted")
  //     })//end on change

  $(document).on('click', ".btnAddIng", function() {
    //addIngredient modal
    selected = $(this).attr("data-recipe_id");
    document.getElementById("recipe_id").setAttribute("value", selected);
    //alert("Recipe to add it to: " + selected);
    $('#my-modal-ing').modal({
      show: 'true'
  });
  })

  $(document).on('click', ".btnAddIns", function() {
    //addIngredient modal
    selected = $(this).attr("data-recipe_id");
    document.getElementById("recipe_id").setAttribute("value", selected);
    //alert("Recipe to add it to: " + selected);
    $('#my-modal-ins').modal({
      show: 'true'
  });
  })


  // //getting add form - instructions
  // $(document).on('click', ".btnAddIns", function() {
  //   //addInstruction modal
  //   selected = $(this).attr("data-recipe_id");
  //   alert("Recipe to add it to: " + selected);

  //   $('#my-modal-ins').modal({
  //     show: 'true'
  // });
  // })
 
  $(document).on('click', '.btnDetails' , function(e) {
    e.preventDefault()
    selected = $(this).attr("data-id");
      // alert(selected);
      $.get(apiUrl + selected, function(data){
        $("#modalTitle").html(data.title)
        $("#descText").html(data.description)
        $("#minutesText").html(data.minutes)


        //add recipe id to elements in modal
        $('#btnIng').attr('data-recipe_id', data.id);
        $('#btnIns').attr('data-recipe_id', data.id);
        $('.instructionList').attr('data-recipe_id', data.id);
        $('.ingredientList').attr('data-recipe_id', data.id);
        // $("#modal-image").attr('src', data.pictureURL) 

        console.log(data.instructions)
        console.log(data.ingredients)
        //Get list of Instructions
        for(let i =0; i < data.instructions.length; i++){
          //append table with data
          alert("Instruction ID: " + data.instructions[i].id + "and Parent ID: " + data.id)
          //$('#instructionData').append('<tr><td><p class="instructionList">'+(i+1)+'. '+  data.instructions[i].instructionText+'</td><td></p><button class="btnEditIns" data-recipe_id="'+data.instructions[i].id +'">Edit</button></td><td><button class="btnDeleteIns" data-recipe_id="'+data.instructions[i].id +'">Delete</button></td></tr>');
          $('#instructionData').append('<tr><td><p class="instructionList">'+(i+1)+'. '+  data.instructions[i].instructionText+'</td><td></p><button class="btnEditIns" data-recipe_id="'+data.id +'" data-item_id="'+data.instructions[i].id +'">Edit</button></td><td><button class="btnDeleteIns" data-recipe_id="'+data.id +'" data-item_id="'+data.instructions[i].id +'">Delete</button></td></tr>');
        }
         //Get list of Ingredients
         for(let i =0; i < data.ingredients.length; i++){
          //append table with data
          //alert("Ingredient ID: " + data.ingredients[i].id + "and Parent ID: " + data.id)
          $('#ingredientData').append('<tr><td><p class="ingredientList">'+data.ingredients[i].ingredientQuantity+" "+data.ingredients[i].measureUnit+" "+data.ingredients[i].ingredientName+'</p></td><td><button class="btnEditIng" data-recipe_id="'+data.id +'" data-item_id="'+data.ingredients[i].id +'">Edit</button></td><td><button class="btnDeleteIng" data-recipe_id="'+data.id +'" data-item_id="'+data.ingredients[i].id +'">Delete</button></td></tr>');
        }
      })//end get

       //add recipe id to elements in modal
       $('#btnIng').attr('data-recipe_id', selected);
       $('#btnIns').attr('data-recipe_id', selected);
       $('.instructionList').attr('data-recipe_id', selected);
       $('.ingredientList').attr('data-recipe_id', selected);


    //return item info based off of what button was selected
    $('#my-modal').modal({
      show: 'true'
    });
  })

  //send id through form to delete ingredient
  $(document).on('click', '.btnDeleteIng', function() {
    selected = $(this).attr("data-recipe_id");
    //itemSelected = $(this).attr("data-item_id");
    document.getElementById('delIng_recipe_id').setAttribute("value", selected);
    document.getElementById('delIng_item_id').setAttribute("value", $(this).attr("data-item_id"));
    $("#my-modal-delIng").modal({
      show: 'true'
    }); 
  })

    //send id through form to delete ingredient
    $(document).on('click', '.btnDeleteIns', function() {
      selected = $(this).attr("data-recipe_id");
      document.getElementById('delIns_recipe_id').setAttribute("value", selected);
      document.getElementById('delIns_item_id').setAttribute("value", $(this).attr("data-item_id"));
      $("#my-modal-delIns").modal({
        show: 'true'
      }); 
    })


   })

 })();
