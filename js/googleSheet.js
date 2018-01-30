/*!
 * 
 * Google Sheets To HTML v0.9a
 * 
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 * 
 * The Google document's sharing must be set to public
 * 
 */

google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    // https://docs.google.com/spreadsheets/d/1EZBcPFW9TCROqPDqPqD1-qYUIH7f553pxvj0L25-wy8/edit?usp=sharing
    // https://docs.google.com/spreadsheets/d/1EZBcPFW9TCROqPDqPqD1-qYUIH7f553pxvj0L25-wy8/edit?usp=sharing
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1EZBcPFW9TCROqPDqPqD1-qYUIH7f553pxvj0L25-wy8/edit?usp=sharing');
    query.setQuery('SELECT A, B, C, D label A "Duration", B "Song", C "Requested By", D "URL"');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);