const prevBtns = document.querySelectorAll('.btn-prev');
const nextBtns = document.querySelectorAll('.btn-next');
const progress = document.getElementById('progress')
const formSteps = document.querySelectorAll('.form-step');

let formStepsNum = 0;

nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum ++ ;
        updateFormSteps();
    });
});


function updateFormSteps(){
    formSteps[formStepsNum].classList.add("form-step-active");
}



// var v = $("#booking-form").validate({
//     rules: {
//       bf_totalGuests: {
//         required: true
//       },
//       bf_date: {
//         required: true
//       },
//       bf_time: {
//         required: true
//       },
//       bf_hours: {
//         required: true
//       },
//       bf_fullname: {
//         required: true
//       },
//       bf_email: {
//         required: true,
//         email: true
//       }

//     },
//     errorElement: "span",
//     errorClass: "error",
//     errorPlacement: function(error, element) {
//           error.insertBefore(element); 
//     }
// });

// $(".next-btn1").click(function() {
//   if (v.form()) {
//     $(".tab-pane").hide();
//     $("#step2").fadeIn(1000);
//     $('.progressbar-dots').removeClass('active');
//     $('.progressbar-dots:nth-child(2)').addClass('active');
//   }
// });
// $(".next-btn2").click(function() {
//   if (v.form()) {
//     $(".tab-pane").hide();
//     $("#step3").fadeIn(1000);
//     $('.progressbar-dots').removeClass('active');
//     $('.progressbar-dots:nth-child(3)').addClass('active');
//   }
// });

// $(".submit-btn").click(function() {
// if (v.form()) {
//   $("#loader").show();
//    setTimeout(function(){
//      $("#booking-form").html("<h2>Your message was sent successfully. Thanks! We'll be in touch as soon as we can, which is usually like lightning (Unless we're sailing or eating tacos!).</h2>");
//    }, 1000);
//   return false;
// }
// });