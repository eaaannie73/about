console.log('init');
jQuery($ => {
    let $shadow = $('#header');
    let shadowMax = $shadow.height() / 4;
    let shadowMin = shadowMax * -0.5;
    let shadowMidPoints = [
      $shadow.offset().left + $shadow.width() / 805,
      $shadow.offset().top + $shadow.height() / 705
    ];
  
    $(document).on('mousemove', e => {
      let shadowX = Math.min(shadowMax, Math.max(shadowMin, shadowMidPoints[0] - e.pageX));
      let shadowY = Math.min(shadowMax, Math.max(shadowMin, shadowMidPoints[1] - e.pageY));
      $shadow.css('box-shadow', `${shadowX}px ${shadowY}px 150px rgba(0,0,0,0.05)`);
    });

    $(document).ready(function() {
        $('#header').fadeIn(900);
    })
  });