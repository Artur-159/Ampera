<!DOCTYPE HTML>
<html lang="hy">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, viewport-fit=cover"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="description" content="Ampera about project">
    <title>Ampera project</title>
    <link rel="stylesheet" href="css/nice-select2.css">
    <link rel="stylesheet" href="css/swiper.min.css">
    <link rel="stylesheet" href="css/project/index.css">
    <link rel="stylesheet" media="screen and (min-width: 1025px)" href="css/project/index-l.css">
    <link rel="stylesheet" media="screen and (max-width: 1024px)" href="css/project/index-m.css">
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
    <div class="project_page">
        <div class="page_container">
            <h2 class="section_title">Ծրագրեր</h2>
            <div class="head_filter">
                <div class="field_block">
                    <span class="hidden_label">Ծառայություն</span>
                    <select name="name" class="block_select" title="Ծառայություն" aria-label="Ծառայություն">
                        <option selected disabled>Ծառայություն</option>
                        <option value="1">Տնտեսական և սոցիալական հետազոտություններ</option>
                        <option value="2">Իրագործելիության հետազոտություններ</option>
                        <option value="3">Հանրային հարցումներ</option>
                        <option value="4">Բիզնես և ներդրումային պլանավորում</option>
                        <option value="5">Ռազմավարական պլանավորում</option>
                        <option value="6">Մեթոդաբանության և ուղեցույցների մշակում</option>
                        <option value="7">Շուկայավարում</option>
                        <option value="8">Ֆինանսական պրոդուկտների մշակում</option>
                        <option value="9">Ուսուցում և իրազեկում</option>
                        <option value="10">Մոնիտորինգ և գնահատում</option>
                        <option value="11">Ծրագրերի մշակում և իրականացում</option>
                    </select>
                </div>
                <div class="field_block">
                    <span class="hidden_label">Պատվիրատու</span>
                    <select name="name" class="block_select" title="Պատվիրատու" aria-label="Պատվիրատու">
                        <option selected disabled>Պատվիրատու</option>
                        <option value="1">Տնտեսական և սոցիալական հետազոտություններ</option>
                        <option value="2">Իրագործելիության հետազոտություններ</option>
                        <option value="3">Հանրային հարցումներ</option>
                        <option value="4">Բիզնես և ներդրումային պլանավորում</option>
                        <option value="5">Ռազմավարական պլանավորում</option>
                        <option value="6">Մեթոդաբանության և ուղեցույցների մշակում</option>
                        <option value="7">Շուկայավարում</option>
                        <option value="8">Ֆինանսական պրոդուկտների մշակում</option>
                        <option value="9">Ուսուցում և իրազեկում</option>
                        <option value="10">Մոնիտորինգ և գնահատում</option>
                        <option value="11">Ծրագրերի մշակում և իրականացում</option>
                    </select>
                </div>
                <div class="field_block">
                    <span class="hidden_label">Ոլորտ</span>
                    <select name="name" class="block_select" title="Ոլորտ" aria-label="Ոլորտ">
                        <option selected disabled>Ոլորտ</option>
                        <option value="1">Տնտեսական և սոցիալական հետազոտություններ</option>
                        <option value="2">Իրագործելիության հետազոտություններ</option>
                        <option value="3">Հանրային հարցումներ</option>
                        <option value="4">Բիզնես և ներդրումային պլանավորում</option>
                        <option value="5">Ռազմավարական պլանավորում</option>
                        <option value="6">Մեթոդաբանության և ուղեցույցների մշակում</option>
                        <option value="7">Շուկայավարում</option>
                        <option value="8">Ֆինանսական պրոդուկտների մշակում</option>
                        <option value="9">Ուսուցում և իրազեկում</option>
                        <option value="10">Մոնիտորինգ և գնահատում</option>
                        <option value="11">Ծրագրերի մշակում և իրականացում</option>
                    </select>
                </div>
                <div class="field_block">
                    <span class="hidden_label">Տարի</span>
                    <select name="name" class="block_select" title="Տարի" aria-label="Տարի">
                        <option selected disabled>Տարի</option>
                        <option value="1">2024</option>
                        <option value="2">2023</option>
                        <option value="3">2022</option>
                        <option value="4">2021</option>
                        <option value="5">2020</option>
                    </select>
                </div>
                <button class="primary_btn" aria-label="Գտնել">Գտնել</button>
            </div>
            <div class="filter_block">
                <ul class="filter_list">
                    <li>
                        <div class="block_inner">
                            <span class="title_block">Ոլորտ</span>
                            <span class="link_description">Գյուղատնտեսություն, գյուղատնտեսական</span>
                            <a href="" class="remove_btn icon_close">remove</a>
                        </div>
                    </li>
                    <li>
                       <div class="block_inner">
                           <span class="title_block">Ոլորտ</span>
                           <span class="link_description">Գյուղատնտեսություն, գյուղատնտեսական ծառայություններ և ենթակառուցվածքներ</span>
                           <a href="" class="remove_btn icon_close">remove</a>
                       </div>
                    </li>
                    <li>
                        <div class="block_inner">
                            <span class="title_block">Ոլորտ</span>
                            <span class="link_description">ԱԶԲ</span>
                            <a href="" class="remove_btn icon_close">remove</a>
                        </div>
                    </li>
                    <li>
                        <div class="block_inner">
                            <span class="title_block">Տարի</span>
                            <span class="link_description">2024</span>
                            <a href="" class="remove_btn icon_close">remove</a>
                        </div>
                    </li>
                </ul>
                <div class="selected_items">Ընդհանուր արդյունք <span>(0)</span></div>
            </div>
            <div class="result_list">
            <!-- <div class="no_result">Ոչինչ չի գտնվել</div>-->
                <div class="result_block">
                    <div class="result_title">Բարձրարժեք մշակաբույսերի դիվերսիֆիկացիայի ընդլայնում. Անասնաբուծության կայուն ինտենսիվացման և պատրաստվածության կենսունակության գնահատում</div>
                    <ul>
                        <li>
                            <span class="title_block">Ոլորտ</span>
                            <span class="link_description">Գյուղատնտեսություն, գյուղատնտեսական ծառայություններ և ենթակառուցվածքներ</span>
                        </li>
                        <li>
                            <span class="title_block">Ծառայություն</span>
                            <span class="link_description">Տնտեսական և սոցիալական հետազոտություններ</span>
                        </li>
                        <li>
                            <span class="title_block">Պատվիրատու:</span>
                            <span class="link_description">ԱԶԲ</span>
                        </li>
                        <li>
                            <span class="title_block">Ժամկետ:</span>
                            <span class="link_description">Հնս 2024 - Նոյ 2024</span>
                        </li>
                    </ul>
                    <a href="" class="icon_arrow_left">Տեսնել ավելին</a>
                </div>
                <div class="result_block">
                    <div class="result_title">Բարձրարժեք մշակաբույսերի դիվերսիֆիկացիայի ընդլայնում. Անասնաբուծության կայուն ինտենսիվացման և պատրաստվածության կենսունակության գնահատում</div>
                    <ul>
                        <li>
                            <span class="title_block">Ոլորտ</span>
                            <span class="link_description">Գյուղատնտեսություն, գյուղատնտեսական ծառայություններ և ենթակառուցվածքներ</span>
                        </li>
                        <li>
                            <span class="title_block">Ծառայություն</span>
                            <span class="link_description">Տնտեսական և սոցիալական հետազոտություններ</span>
                        </li>
                        <li>
                            <span class="title_block">Պատվիրատու:</span>
                            <span class="link_description">ԱԶԲ</span>
                        </li>
                        <li>
                            <span class="title_block">Ժամկետ:</span>
                            <span class="link_description">Հնս 2024 - Նոյ 2024</span>
                        </li>
                    </ul>
                    <a href="" class="icon_arrow_left">Տեսնել ավելին</a>
                </div>
                <div class="result_block">
                    <div class="result_title">Բարձրարժեք մշակաբույսերի դիվերսիֆիկացիայի ընդլայնում. Անասնաբուծության կայուն ինտենսիվացման և պատրաստվածության կենսունակության գնահատում</div>
                    <ul>
                        <li>
                            <span class="title_block">Ոլորտ</span>
                            <span class="link_description">Գյուղատնտեսություն, գյուղատնտեսական ծառայություններ և ենթակառուցվածքներ</span>
                        </li>
                        <li>
                            <span class="title_block">Ծառայություն</span>
                            <span class="link_description">Տնտեսական և սոցիալական հետազոտություններ</span>
                        </li>
                        <li>
                            <span class="title_block">Պատվիրատու:</span>
                            <span class="link_description">ԱԶԲ</span>
                        </li>
                        <li>
                            <span class="title_block">Ժամկետ:</span>
                            <span class="link_description">Հնս 2024 - Նոյ 2024</span>
                        </li>
                    </ul>
                    <a href="" class="icon_arrow_left">Տեսնել ավելին</a>
                </div>
            </div>
            <div class="paging">
                <ul>
                    <li><a href="" class="icon_arrow_right inactive">Prev</a></li>
                    <li><a href="" class="current_page">1</a></li>
                    <li><a href="">2</a></li>
                    <li><a href="" class="icon_arrow_left">Next</a></li>
                </ul>
            </div>

        </div>
    </div>
</div>

<?php
include 'templates/footer.php'
?>

<script src="js/swiper.min.js"></script>
<script type="module" src="js/project.js"></script>
</body>
</html>