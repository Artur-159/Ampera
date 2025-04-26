<!DOCTYPE HTML>
<html lang="hy">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, viewport-fit=cover"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="description" content="Ampera about project">
    <title>Ampera project</title>
    <link rel="stylesheet" href="css/swiper.min.css">
    <link rel="stylesheet" href="css/contact/index.css">
    <link rel="stylesheet" media="screen and (min-width: 1025px)" href="css/contact/index-l.css">
    <link rel="stylesheet" media="screen and (max-width: 1024px)" href="css/contact/index-m.css">
    <?php
    include 'templates/favicons.php'
    ?>
</head>
<body>
<?php
include 'templates/header.php'
?>
<div class="content">
    <?php
    include 'templates/main.php'
    ?>
    <div class="breadcrumbs">
        <div class="page_container">
            <ul>
                <li><a href="index.php">Ծառայություններ</a></li>
                <li>
                    <div> Տնտեսական ԵՎ սոցիալական հետազոտություններ</div>
                </li>
            </ul>
        </div>
    </div>
   <div class="contact_page">
       <div class="page_container">
           <h2 class="section_title">Կապ</h2>
           <div class="contact_row">
               <div class="map_block">
                   <iframe src="https://api-maps.yandex.com/frame/v1/-/CDcv58yy" width="100%" height="428"></iframe>
               </div>
                <div class="contact_info">
                    <div class="contact_title">Կոնտակտային տվյալներ</div>
                    <ul class="list_info">
                        <li><div class="icon_location">ՀՀ, Երևան, Վերին Անտառային 135, բն. 3</div></li>
                        <li><a href="tel:+37411205060" class="icon_phone">+374 11 205060</a></li>
                        <li><a href="mailto:info@ampartners.am" class="icon_msg"><span>info@ampartners.am</span></a></li>
                    </ul>
                </div>
           </div>
       </div>
   </div>
</div>

<?php
include 'templates/footer.php'
?>

<script src="js/swiper.min.js"></script>
<script type="module" src="js/index.js"></script>
</body>
</html>