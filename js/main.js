function fileInputChange(event) {
    $('#file-label-id').html(event.target.files[0].name);
}

$('#phone').mask("+380(999) 99-9999");

$('#my-form').validator().on('submit', function (event) {
    console.dir(this);
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        console.log('handle the invalid form...')
    } else {
        // everything looks good!
        console.log('everything looks good!');
        sendForm();
        $('#my-modal').modal('hide');
        event.preventDefault();
        return false;
    }
});


function sendForm() {
    var data = new FormData();

    var form_data = $('#my-form').serializeArray();
    $.each(form_data, function(key, input) {
        data.append(input.name, input.value);
    });

    var file_data = $('input[name="custom-file"]')[0].files[0];
    data.append('myFile', file_data);

    $.ajax({
        type: 'POST',
        processData: false,
        contentType: false,
        url: 'http://domain/controller/controller.php',
        data: data,
        success: function(data) {
            console.log(data);
        },
        error:  function(xhr, str){
            alert('Возникла ошибка: ' + xhr.responseCode);
        }
    });
}


