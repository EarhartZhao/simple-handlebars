$(function () {
    searchName()
    function searchName(name) {
        $.ajax({
            type: "get",
            url: "/getCase",
            dataType: "json",
            contentType: 'application/json;charset=utf-8',
            data: {
                name: name
            },
            success: function (res) {
                var getData = res.data.data;
                if (!name) {
                    
                    if (getData.length > 1) {
                        for (var i = 0; i < getData.length; i++) {
                            var a = `<span>${getData[i]}</span>`
                            $('.list').append(a);
                        }
                    }
                } else {
                    $('.listDetail').html('')
                    $('.listDetail').html(`
                            <p>姓名:${getData[0].name}</p>
                            <p>年龄:${getData[0].age}</p>
                            <p>爱好:${getData[0].like}</p>
                        `)
                }

            }
        });
    }
    $('.list').on('click', 'span', function () {
        var name = $(this).text();
        searchName(name)
    });
})