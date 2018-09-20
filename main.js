$(document).ready(function(){


    $(document).on('click', '#generate-code-button', function(){
        console.log("document was clicked");

        $('#generated-code').empty();


        let desc = $('#desc').val().replace(/\n/g, '<br/>');
        // console.log(desc);
        let price = $('#price').val();

        let thingsToKnow = $('#things-to-know').val().replace(/\n/g, '<br/>');
        // console.log(thingsToKnowBolded);

        let organizer = `The organizer of this event is <span style="color: #ff6600;">${$('#organizer').val()}</span>.`;
        // console.log(thingsToKnowGeneral);

        let checkin = $('#check-in-location').val();
        let map = $('#map-link').val();
        let photoCreds = $('#photo-credits').val();
 
        let code = 
        `<p>${desc}</p>
        <p><strong>${price}<br /></strong></p>
        <p><span style="color: #ff6600;"><strong><span style="font-size: 12pt;">Things to Know</span></strong></span></p>
        <p>${thingsToKnow}<br />${organizer}</p>
        <p>&nbsp;</p>
        <p><span style="color: #ff6600;"><strong><span style="font-size: 12pt;">Event Check-in Location</span></strong></span></p>
        <p>${checkin}</p>
        <p><a href="${map}" target="_blank">View Map</a><br /><br /></p>
        <hr style="height: 1px; border: none; background-color: #999; width: 100%; text-align: left; margin: 0 auto;" />
        <p style="line-height: 1;"><span style="font-size: 8pt;">Photo Credits:&nbsp;</span><span style="font-size: 10.6667px;">${photoCreds}</span></p>
        <p>&nbsp;</p>
        `;

        document.getElementById('generated-code').value = code;


    })

})