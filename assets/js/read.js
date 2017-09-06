/**
 * Use DataTables to enhance the functionality of the table on this page.
 *
 * ** NOTE ** All extentsions are availabile in your code already.
 *            You only need to include the javascript and css listed below
 *
 * Here's what this you will need to do:
 *
 * 1. Inlclude the following DataTables css in layout.ejs
 *    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs/dt-1.10.12/b-1.2.2/b-print-1.2.2/cr-1.3.2/datatables.min.css"/>
 *
 * 2. Include the following DataTables JavaScript in layout.ejs
 *    <script type="text/javascript" src="https://cdn.datatables.net/v/bs/jszip-2.5.0/pdfmake-0.1.18/dt-1.10.12/b-1.2.2/b-html5-1.2.2/b-print-1.2.2/cr-1.3.2/datatables.min.js"></script>
 *
 * 3. Using the DataTables plugin render the table on the page as a DataTablex
 *
 * 4. Use the buttons extention to enable the copy, csv, excel, pdf, and print
 *
 * 5. Use the colReorder Plugin to add the ability to reorder columns
 *
 * 6. The table should be able to scroll horizontal
 *
 * 7. Use any other features you find interesting
 *
 * Here's the documentation you need:
 * https://datatables.net/
 * https://datatables.net/extensions/buttons/examples/
 * https://datatables.net/extensions/colreorder/examples/
 * https://datatables.net/examples/basic_init/scroll_x.html
 *
 */

 (function(){

   $(function(){
    //add datatables
    $(document).ready(function(){
      $('#studentTable').DataTable( {
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

 
  $(document).on('click', '.btnDetails' , function(e) {
    e.preventDefault()
    // let characterName = $(this).attr("data-target");
    //   charID = $(this).attr("data-id");
    //   //get event desc
    //   tempEventUrl="http://gateway.marvel.com/v1/public/characters/"+charID+"/events?"+ apiKey
    //   characterImage = $(this).attr("data-img");

    //   $.get(tempEventUrl, function(data) {
    //             let events = data.data.results;
    //             let eventCount=(events.length);
    //             if(eventCount>=5){
    //                       $('.modal-body').html("");
    //                       for(let i = 0; i < 5; i++){
    //                               $('#modalTitle').html(characterName);
    //                               $('.modal-body').append('<h3 class="eventName">'+events[i].title+'</h3><h4 class="eventDesc">'+events[i].description+'</h4><p class="heroes">Number of Characters in Event: '+events[i].characters.available+'</p><p class="returned">Characters that Survived Event: '+events[i].characters.returned+'</p>');
    //                       }//end for loop
    //                       $('.modal-content').css('background-image', 'url('+characterImage+')');
    //             }else{
    //                       $('.modal-body').html("");
    //                       $('#modalTitle').html(characterName);
    //                       $('.modal-body').html('<h2 class="eventName">There are no events for this character</h2>');
    //                       console.log(characterImage);
    //                       $('.modal-content').css('background-image', 'url('+characterImage+')');
    //                       //$('body').css('background-image', 'url(../images/backgrounds/header-top.jpg)');
    //             }
                $('#my-modal').modal({
                    show: 'true'
                });
      })




   })

 })();
