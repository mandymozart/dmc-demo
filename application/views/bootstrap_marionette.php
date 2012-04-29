<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Bootstrap, from Twitter</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le HTML5 shim, for IE6-8 support of HTML elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Le styles -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/bootstrap-responsive.min.css" rel="stylesheet">
    <link href="assets/css/bootstrap.dmc.css" rel="stylesheet">
    <link href="assets/css/custom.css" rel="stylesheet">

    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="assets/img/favicon.ico">
    <link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="assets/img/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="assets/img/apple-touch-icon-114x114.png">
  </head>

  <body>

    <div class="navigation">
    </div>

    <div class="container">
    </div>

    <script id="navigation-template" type="text/x-handlebars-template">
      <ul>
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#user">User</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </script>
    
    <script id="main-template" type="text/x-handlebars-template">
      <h1>Bootstrap starter template</h1>
      <h1>Welcome to CodeIgniter!</h1>

      <p>The page you are looking at is being generated dynamically by CodeIgniter.</p>

      <ul>
        <li><a href="<?php echo site_url('api/example/users');?>">Users</a> - defaulting to XML</li>
        <li><a href="<?php echo site_url('api/example/users/format/csv');?>">Users</a> - get it in CSV</li>
        <li><a href="<?php echo site_url('api/example/user/id/1');?>">User #1</a> - defaulting to XML</li>
        <li><a href="<?php echo site_url('api/example/user/id/1/format/json');?>">User #1</a> - get it in JSON</li>
        <li><a id="ajax" href="<?php echo site_url('api/example/users/format/json');?>">Users</a> - get it in JSON (AJAX request)</li>
       </ul>

      <p><br />Page rendered in {elapsed_time} seconds</p>
    </script>

    <script id="contact-template" type="text/x-handlebars-template">
      <h1>Bootstrap Contact</h1>
      <p>Contact us.</p>
    </script>

    <script id="user-template" type="text/x-handlebars-template">
      <? include ('tpl/user.php'); ?>
    </script>

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/js/jquery-1.7.1.js"></script>
    <script src="assets/js/underscore.js"></script>
    <script src="assets/js/backbone.js"></script>
    <script src="assets/js/json2.js"></script>
    <script src="assets/js/handlebars.js"></script>
    <script src="assets/js/backbone.marionette.js"></script>

    <!-- Jquery plugins vendor -->
    <script src="assets/js/jquery.tableofcontents.min.js"></script>
    <script src="assets/js/jquery.overscroll.min.js"></script>
    <!-- Jquery plguin inhouse -->
    <script src="assets/js/app/jquery.singlepageapp.js"></script>

    <script src="assets/js/app/app.js"></script>

  </body>
</html>
