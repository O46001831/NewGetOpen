<div id="gallery-container">
    <?php
    $imageFiles = glob('./img/gallery/*.{jpg,jpeg,png,gif}', GLOB_BRACE);
    foreach ($imageFiles as $image) {
        echo '<img src="' . $image . '" class="gallery-image">';
    }
    ?>
</div>
<div id='galleryPlaceholder'></div>