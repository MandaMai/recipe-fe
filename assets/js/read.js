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

  $(document).on('click', ".btnAddIng", function() {
    //addIngredient modal
    $('#my-modal-ing').modal({
      show: 'true'
  });
  })

  $(document).on('click', ".btnAddIns", function() {
    //addInstruction modal
    $('#my-modal-ins').modal({
      show: 'true'
  });
  })
 
  $(document).on('click', '.btnDetails' , function(e) {
    e.preventDefault()
    selected = $(this).attr("data-id");
      alert(selected);
      $.get(apiUrl + selected, function(data){
        $("#modalTitle").html(data.title)
        $("#descText").html(data.description)
        $("#minutesText").html(data.minutes)
        for(let i =0; i < data.instructions.length; i++){
          //append table with data
          sails.log(data.instructions[i].instructionText)
        }
      })//end get
      
    

    //return item info based off of what button was selected
    $('#my-modal').modal({
      show: 'true'
    });
  })




   })

 })();
