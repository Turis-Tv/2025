/* Parameters for percentageBars renderer:
1.string: square as default or round for a rounded bar.
2.string: A hex color for the text.
3.string: A hex color for the bar.
5.string: A hex color for the background.
6.integer: A number used to round the value.
7.string: A border style, default=ridge (solid, outset, groove, ridge)
*/

$(document).ready(function() {
  // DataTable initialisation
  $('#example').DataTable({
    "dom": '<"dt-buttons"Bf><"clear">lirtp',
    "paging": true,
    "autoWidth": true,
    "columnDefs": [{
      targets: 4,
      render: $.fn.dataTable.render.percentBar('round','#fff', '#FF9CAB', '#FF0033', '#FF9CAB', 0, 'solid')
    }],
    "buttons": [
				'colvis',
				'copyHtml5',
        'csvHtml5',
				'excelHtml5',
        'pdfHtml5',
				'print'
			]
  });
});