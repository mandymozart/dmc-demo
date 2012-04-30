<h1>Communication Test Page</h1>

<p>The page you are looking at is being generated dynamically by CodeIgniter RESTful.</p>

<ul>
    <li><a href="<?php echo site_url('api/example/users');?>">Users</a> - defaulting to XML</li>
    <li><a href="<?php echo site_url('api/example/users/format/csv');?>">Users</a> - get it in CSV</li>
    <li><a href="<?php echo site_url('api/example/user/id/1');?>">User #1</a> - defaulting to XML</li>
    <li><a href="<?php echo site_url('api/example/user/id/1/format/json');?>">User #1</a> - get it in JSON</li>
    <li><a id="ajax" href="<?php echo site_url('api/example/users/format/json');?>">Users</a> - get it in JSON (AJAX request)</li>
</ul>

<p><br />Page rendered in {elapsed_time} seconds</p>