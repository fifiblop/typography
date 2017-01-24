<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <?php include 'getFonts.php'; ?>
        <h1 class="page-title">The Typography</h1>
        <div class="card-container">
        </div>
        <script>
            const fontsString = '<?= $fontArray ?>';
        </script>
        <script src="script.js"></script>
    </body>
</html>
