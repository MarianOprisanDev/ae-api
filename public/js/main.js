// delete user button action
$(document).ready(function() {
    $('.delete-user').on('click', function(e) {
        $target = $(e.target);
        const id = $target.attr('data-id');
        if(confirm('Are you sure you want to delete this user?')) {
            $.ajax({
                type: 'DELETE',
                url: '/user/' + id,
                success: function(response) {
                        window.location.href='/users';
                },
                error: function(err) {
                    console.log(err);
                }
            });
        }

    })
})