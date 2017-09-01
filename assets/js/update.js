/**
 * Use the jQuery Validate and the bootstrap-select plugin to enhance this page
 *
 * Here's what this you will need to do:
 *
 * 1. When the page is loaded all form fields should be disabled except
 *    for the dropdown to select a student
 *
 * 2. Using the bootstrap-selct plugin render dropdown on the page
 *
 * 3. Use the live search functionality to make the dropdown searchable
 *
 * 4. Add the user glyphicons next to each student in the list
 *
 * 6. Add a menu header to the dropdown
 *
 * 7. Customize further with anything you find intersting
 *
 * 8. When an student is selected the form fields should be enabled
      and populated with the data for the selected student
 *
 * 9. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *
 * 10. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 * https://silviomoreto.github.io/bootstrap-select/
 * https://silviomoreto.github.io/bootstrap-select/examples/
 * http://getbootstrap.com/components/#glyphicons
 * https://api.jquery.com/jQuery.get/
 * http://stackoverflow.com/questions/9807426/use-jquery-to-re-populate-form-with-json-data
 *
 */

 (function(){
  $("#updateStudentForm :input").prop("disabled", true);
  let apiUrl = "http://localhost:1337/student/"
  let selected;
   $(function(){
    $("#updateStudentForm").validate({
      errorClass: 'text-danger',
      rules: {
        first_name: {
          required: true,
          minlength: 2
        },
        last_name: {
          required: true,
          minlength: 2
        }, 
        start_date: {
          required: true,
          dateISO: true
        }, 
        gpa: {
          required: true,
          maxlength: 3, 
          number: true, 
          range: [0.0, 4.0]
        }, 
        sat: {
          required: true,
          maxlength: 4, 
          digits: true, 
          range: [0, 1600]
        }
      },
      messages: {
        first_name: {
          minlength: "At least 2 characters required!"
        }, 
        last_name: {
          
          minlength: ("At least 2 characters required!")
        }, 
        start_date: {
          
          dateISO: ("Must by in yyyy-mm-dd format")
        }, 
        gpa: {
          required: "must be a decimal number between 0.0-4.0"
        },
        sat: {
          required: "must be a number between 0-1600"
        }
      }
    });

      $('#student_id').on('change', function(){
        selected = $(this).find("option:selected").val();
        $.get(apiUrl+selected, function(data){
          //alert(data.student_id)
            //$('tbody').append('<tr class="questRow"><td class="name">'+questName+'</td><td class="image">'+questImg+'</td><td><button type="button" class="remove btn btn-default" data-id="'+questID+'" data-target="'+questName+'">Remove</button></td><td><button type="button" class="edit btn btn-default" data-id="'+questID+'" data-target="'+questName+'">Edit</button></td></tr>');
            $.each(data, function(key, val){
              let el=$('[name="'+key+'"]');
              let type = el.attr('type');
              el.val(val);
            })//end each    
        })//end get
        $("#updateStudentForm :input").prop("disabled", false);
      })//end on change




  $('#updateStudentForm').on('submit', function(e){
    // e.preventDefault();
    // $.ajax({
    //   url: apiUrl + selected,
    //   data: $("#updateStudentForm").serialize(),
    //   method: "PUT",
    //   success: function(data){

    //     //reload student table on success
    //     alert("Student was updated!")

    //     //disable form fields again
    //     $("#updateStudentForm :input").prop("disabled", true);

    //     //reset form back to empty fields
    //     $("#updateStudentForm")[0].reset()
    //      }//end success
    //     })//end ajax
    $("#updateStudentForm :input").prop("disabled", false);
  })//end on change
   })

 })();
